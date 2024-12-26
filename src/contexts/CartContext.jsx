import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(undefined)

const CART_STORAGE_KEY = 'hotel_cart'
const ORDERS_STORAGE_KEY = 'hotel_orders'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [orders, setOrders] = useState([])

  // Load cart and orders from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY)
    
    if (savedCart) setItems(JSON.parse(savedCart))
    if (savedOrders) setOrders(JSON.parse(savedOrders))
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
  }, [orders])

  const addItem = (item) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id)
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, item]
    })
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const addOrder = (order) => {
    setOrders((prev) => [order, ...prev])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ 
        items, 
        orders,
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart, 
        addOrder,
        total,
        itemCount 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

