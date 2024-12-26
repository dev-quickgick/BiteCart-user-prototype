"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { User, CreditCard, Banknote, Smartphone, ChevronDown, Plus, Minus, PenSquare, ShoppingCart } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { storage } from "../utils/Storage";
import toast from "react-hot-toast";
import { getAvailableAddons, getAddonsByItemId } from "../data/menu-data";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    roomNo: "",
    mobileNo: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [selectedItemAddons, setSelectedItemAddons] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isQuantityDialogOpen, setIsQuantityDialogOpen] = useState(false);
  const [isAddonsDialogOpen, setIsAddonsDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = storage.getCart();
    setCartItems(savedCart);

    const savedUserInfo = storage.getItem("userInfo", {});
    setUserInfo(savedUserInfo);
  }, []);

  const updateQuantity = useCallback((index, delta) => {
    setCartItems(prevItems => {
      const newCartItems = [...prevItems];
      newCartItems[index].quantity += delta;
      if (newCartItems[index].quantity <= 0) {
        newCartItems.splice(index, 1);
        setIsQuantityDialogOpen(false); // Close the dialog
      }
      storage.setItem("cart", newCartItems);
      return newCartItems;
    });
  }, []);

  const updateAddonQuantity = useCallback((itemIndex, addonIndex, delta) => {
    setCartItems(prevItems => {
      const newCartItems = [...prevItems];
      const addon = newCartItems[itemIndex].addons[addonIndex];
      addon.quantity = (addon.quantity || 1) + delta;
      if (addon.quantity <= 0) {
        newCartItems[itemIndex].addons.splice(addonIndex, 1);
      }
      storage.setItem("cart", newCartItems);
      return newCartItems;
    });
  }, []);

  const handleAddAddon = useCallback((itemIndex, addon) => {
    setCartItems(prevItems => {
      const newCartItems = [...prevItems];
      const item = newCartItems[itemIndex];
      const existingAddon = item.addons.find((a) => a.id === addon.id);
      if (existingAddon) {
        existingAddon.quantity = (existingAddon.quantity || 1) + 1;
      } else {
        item.addons.push({ ...addon, quantity: 1 });
      }
      storage.setItem("cart", newCartItems);
      return newCartItems;
    });
  }, []);

  const calculateItemTotal = (item) => {
    const itemSubtotal = item.price * item.quantity;
    const addonSubtotal = item.addons.reduce(
      (acc, addon) => acc + addon.price * (addon.quantity || 1),
      0
    );
    return { itemSubtotal, addonSubtotal, total: itemSubtotal + addonSubtotal };
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const { total: itemTotal } = calculateItemTotal(item);
      return total + itemTotal;
    }, 0);
    const tax = subtotal * 0.18;
    return { subtotal, tax, total: subtotal + tax };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const { total } = calculateTotal();
    const order = {
      items: cartItems,
      userInfo,
      paymentMethod,
      total,
      orderId: `ORD${Date.now()}`,
      status: "Preparing",
      orderDate: new Date().toISOString(),
    };

    const previousOrders = storage.getItem("previousOrders", []);
    storage.setItem("previousOrders", [...previousOrders, order]);
    storage.setItem("userInfo", userInfo);
    storage.clearCart();

    toast.success("Order placed successfully!");
    navigate("/order-placed", { state: { order } });
  };

  const { subtotal, tax, total } = useMemo(() => calculateTotal(), [cartItems]);

  const handleOpenAddonDialog = useCallback((itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      const addons = getAddonsByItemId(item.id);
      setSelectedItemAddons(addons);
      setSelectedItem(item);
      setIsAddonsDialogOpen(true);
    }
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navbar />

      <main className="container mx-auto p-4 space-y-6 md:max-w-none md:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-12 md:gap-8">
          {cartItems.length === 0 ? (
            <Card className="text-center p-8 md:col-span-12">
              <CardContent>
                <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-4">
                  Add some items to your cart and come back!
                </p>
                <Link to="/">
                  <Button>Continue Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:col-span-12 md:grid md:grid-cols-12 md:gap-8">
              <div className="md:col-span-8 space-y-6">
                {/* Cart Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cart Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-2">Click any item to modify quantity or add-ons</p>
                    <ScrollArea className={`${cartItems.length === 1 ? 'h-[90px]' : 'h-[200px]'} md:h-[300px] pr-4`}>
                      
                      {cartItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center w-full py-2 hover:bg-[#FFDBBB] rounded-lg px-2 cursor-pointer mb-4 transition-colors duration-200 group"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsQuantityDialogOpen(true);
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-md object-cover"
                            />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">
                              ₹{calculateItemTotal(item).total}
                            </p>
                            
                          </div>
                          
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-4 space-y-6">
                {/* Your Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="roomNo">Room</Label>
                      <Input
                        id="roomNo"
                        name="roomNo"
                        value={userInfo.roomNo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={userInfo.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobileNo">Mobile No.</Label>
                      <div className="flex gap-2">
                        <Input
                          id="mobileNo"
                          name="mobileNo"
                          value={userInfo.mobileNo}
                          onChange={handleInputChange}
                          required
                        />
                        <Button variant="outline" type="button">
                          Verify
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bill Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bill Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (18%)</span>
                      <span>₹{tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex items-center">
                          <Banknote className="mr-2 h-4 w-4" />
                          Cash
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center">
                          <Smartphone className="mr-2 h-4 w-4" />
                          UPI
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Credit/Debit Card
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Button type="submit" className="w-full">
                  Proceed
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Quantity and Add-ons Dialog */}
        <Dialog open={isQuantityDialogOpen} onOpenChange={setIsQuantityDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedItem?.name}</DialogTitle>
              <DialogDescription>
                Adjust quantity and manage add-ons
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Quantity</span>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(cartItems.findIndex(item => item.id === selectedItem.id), -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">
                    {selectedItem?.quantity}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(cartItems.findIndex(item => item.id === selectedItem.id), 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Add-ons</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsAddonsDialogOpen(true);
                      setIsQuantityDialogOpen(false);
                      handleOpenAddonDialog(selectedItem.id);
                    }}
                  >
                    <PenSquare className="h-4 w-4 mr-2" />
                    Modify
                  </Button>
                </div>
                {selectedItem?.addons?.map((addon, addonIndex) => (
                  <div
                    key={addonIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-muted-foreground">
                      {addon.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => updateAddonQuantity(cartItems.findIndex(item => item.id === selectedItem.id), addonIndex, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-4 text-center">
                        {addon.quantity || 1}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => updateAddonQuantity(cartItems.findIndex(item => item.id === selectedItem.id), addonIndex, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm ml-2">
                        ₹{addon.price * (addon.quantity || 1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Done</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Manage Add-ons Dialog */}
        <Dialog open={isAddonsDialogOpen} onOpenChange={setIsAddonsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                Modify Add-ons for {selectedItem?.name}
              </DialogTitle>
              <DialogDescription>
                Customize your order with these available add-ons
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-4">
                  {selectedItemAddons.length > 0 ? (
                    selectedItemAddons.map(
                      (addon, addonIndex) => (
                        <div
                          key={addonIndex}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedItem?.addons?.some(
                                (a) => a.id === addon.id
                              )}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleAddAddon(
                                    cartItems.findIndex(item => item.id === selectedItem.id),
                                    addon
                                  );
                                } else {
                                  const addonIndex =
                                    selectedItem.addons.findIndex(
                                      (a) => a.id === addon.id
                                    );
                                  if (addonIndex !== -1) {
                                    updateAddonQuantity(
                                      cartItems.findIndex(item => item.id === selectedItem.id),
                                      addonIndex,
                                      -999
                                    );
                                  }
                                }
                              }}
                            />
                            <div className="grid gap-1">
                              <Label>{addon.name}</Label>
                              <span className="text-sm text-muted-foreground">
                                ₹{addon.price}
                                {addon.perHour ? " per hour" : ""}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-center text-muted-foreground py-4">
                      No add-ons available for this item
                    </p>
                  )}
                </div>
              </ScrollArea>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  onClick={() => {
                    setIsQuantityDialogOpen(true);
                    setIsAddonsDialogOpen(false);
                  }}
                >
                  Done
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

