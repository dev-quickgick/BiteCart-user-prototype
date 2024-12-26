export const storage = {
    setItem: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error saving to localStorage', error);
      }
    },
    getItem: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error reading from localStorage', error);
        return defaultValue;
      }
    },
    removeItem: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from localStorage', error);
      }
    },
    // Cart-specific functions
    getCart: () => {
      return storage.getItem('cart', []);
    },
    addToCart: (item) => {
      const cart = storage.getItem('cart', []);
      cart.push(item);
      storage.setItem('cart', cart);
    },
    removeFromCart: (index) => {
      const cart = storage.getItem('cart', []);
      cart.splice(index, 1);
      storage.setItem('cart', cart);
    },
    clearCart: () => {
      storage.setItem('cart', []);
    },
    updateCartItem: (index, updatedItem) => {
      const cart = storage.getItem('cart', []);
      cart[index] = updatedItem;
      storage.setItem('cart', cart);
    }
  };
  
  