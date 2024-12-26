import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, BellRing, CookingPot, Minus, PenToolIcon, Plus, ShoppingCart, User, Clock } from 'lucide-react';
import { toast } from "react-hot-toast";
import { services } from "../data/services";
import { storage } from "../utils/Storage";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

function ShowcasePage() {
  const { service: serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === serviceId);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  if (!service) return <div>Service not found</div>;

  const handleAddToCart = () => {
    const newItem = {
      ...selectedItem,
      addons: selectedAddons,
      quantity: quantity,
    };
    storage.addToCart(newItem);
    toast.success(`${selectedItem.name} added to cart!`, {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setSelectedItem(null);
    setSelectedAddons([]);
    setQuantity(1);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative w-full h-64 overflow-hidden rounded-xl border-2 border-orange-300 shadow-lg">
            <img
              src={
                service.image ||
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
              }
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {service.name}
              </h1>
              <p className="text-orange-100 max-w-md text-lg drop-shadow">
                Choose from our selection of {service.name.toLowerCase()}{" "}
                options
              </p>
              
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-orange-100 rounded-lg p-4 mt-4 flex items-center justify-center">
            <Clock className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-700 font-medium">
              Service Hours: {service.timing}
            </span>
          </div>
        </motion.div>

        <div className="space-y-6 pb-20">
          <Accordion type="single" collapsible className="w-full">
            {service.subCategories.map((subCategory, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={subCategory.id}
                className="border-orange-200"
              >
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-orange-700">
                  <div className="flex items-center space-x-2">
                    <span>{subCategory.name}</span>
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-orange-100 text-orange-700"
                    >
                      {subCategory.items.length} items
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    <AnimatePresence>
                      {subCategory.items.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 ease-in-out border-2 border-orange-200 hover:border-orange-300">
                            <div className="relative">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute top-2 right-2">
                                <Badge
                                  variant="secondary"
                                  className="bg-orange-500 text-white"
                                >
                                  ₹{item.price}
                                </Badge>
                              </div>
                            </div>
                            <CardHeader>
                              <CardTitle className="text-lg text-orange-700">
                                {item.name}
                              </CardTitle>
                              <CardDescription className="line-clamp-2 text-brown-600">
                                {item.description ||
                                  "Experience our exquisite offering"}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    onClick={() => setSelectedItem(item)}
                                    className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
                                  >
                                    <CookingPot className="w-4 h-4 mr-2" />
                                    Customize
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-white border-2 border-orange-300">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold text-orange-700">
                                      {item.name}
                                    </DialogTitle>
                                    <DialogDescription className="text-brown-600">
                                      Customize your order
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="flex items-center justify-between">
                                      <Label
                                        htmlFor="quantity"
                                        className="text-right text-brown-700 font-medium"
                                      >
                                        Quantity
                                      </Label>
                                      <div className="flex items-center space-x-2">
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          onClick={() =>
                                            setQuantity(
                                              Math.max(1, quantity - 1)
                                            )
                                          }
                                          className="text-orange-500 hover:bg-orange-100 border-orange-300"
                                        >
                                          <Minus className="h-4 w-4 text-orange-500" />
                                        </Button>
                                        <span className="w-8 text-center text-brown-700 font-bold">
                                          {quantity}
                                        </span>
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          onClick={() =>
                                            setQuantity(quantity + 1)
                                          }
                                          className="text-orange-500 hover:bg-orange-100 border-orange-300"
                                        >
                                          <Plus className="h-4 w-4 text-orange-500" />
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <Label className="text-brown-700 font-medium">
                                        Addons
                                      </Label>
                                      <ScrollArea className="h-[200px] rounded-md border-2 border-orange-200 p-4">
                                        {subCategory.addons.map((addon) => (
                                          <div
                                            key={addon.id}
                                            className="flex items-center space-x-2 py-2"
                                          >
                                            <Checkbox
                                              id={addon.id}
                                              onCheckedChange={(checked) => {
                                                if (checked) {
                                                  setSelectedAddons([
                                                    ...selectedAddons,
                                                    addon,
                                                  ]);
                                                } else {
                                                  setSelectedAddons(
                                                    selectedAddons.filter(
                                                      (a) => a.id !== addon.id
                                                    )
                                                  );
                                                }
                                              }}
                                              className="text-orange-500 border-orange-300"
                                            />
                                            <Label
                                              htmlFor={addon.id}
                                              className="flex-grow text-brown-600"
                                            >
                                              {addon.name}
                                            </Label>
                                            <span className="text-sm font-medium text-orange-500">
                                              ₹{addon.price}
                                            </span>
                                          </div>
                                        ))}
                                      </ScrollArea>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button
                                      onClick={handleAddToCart}
                                      className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
                                    >
                                      <ShoppingCart className="w-4 h-4 mr-2" />
                                      Add to Cart
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-lg border-t border-orange-200">
          <div className="container mx-auto flex justify-center">
            <Link to="/cart" className="w-full max-w-md">
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Go to Cart
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ShowcasePage;

