import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Package, ChevronDown, TrendingUp, Calendar, DollarSign, ShoppingBag, Clock } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "../components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { storage } from "../utils/Storage";

export default function PreviousOrdersPage() {
  const [previousOrders, setPreviousOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const orders = storage.getItem("previousOrders", []);
    setPreviousOrders(orders.reverse());
  }, []);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  // Calculate overview statistics
  const totalOrders = previousOrders.length;
  const totalSpent = previousOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );
  const averageOrderValue = totalOrders > 0 ? totalSpent / totalOrders : 0;
  const lastOrderDate = previousOrders[0]?.orderDate;

  // Prepare data for the chart
  const chartData = previousOrders.map((order) => ({
    date: new Date(order.orderDate).toLocaleDateString(),
    amount: order.total,
  }));

  return (
    <div className="min-h-screen bg-gray-50 w-full pb-16 md:pb-0">
      <NavBar />

      <div className="bg-white w-full">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-center">Order History</h1>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Total Orders
                  </p>
                  <p className="text-2xl font-bold">{totalOrders}</p>
                </div>
                <ShoppingBag className="h-8 w-8 text-blue-500 opacity-75" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">
                    Total Spent
                  </p>
                  <p className="text-2xl font-bold">₹{totalSpent.toFixed(2)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500 opacity-75" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">
                    Average Order
                  </p>
                  <p className="text-2xl font-bold">
                    ₹{averageOrderValue.toFixed(2)}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500 opacity-75" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">
                    Last Order
                  </p>
                  <p className="text-2xl font-bold">
                    {lastOrderDate
                      ? new Date(lastOrderDate).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-orange-500 opacity-75" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spending Chart */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Spending Overview</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          {previousOrders.length === 0 ? (
            <Card>
              <CardContent className="text-center p-6">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No orders found</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => navigate("/")}
                >
                  Start Shopping
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {previousOrders.map((order, index) => (
                <motion.div
                  key={order.orderId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleOrder(order.orderId)}
                        className="w-full text-left"
                      >
                        <div className="p-4 flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="mt-1">
                              <Package className="h-5 w-5 text-blue-500" />
                            </div>
                            <div>
                              <h3 className="font-medium">
                                Order #{order.orderId}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {new Date(order.orderDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "success"
                                  : "secondary"
                              }
                              className="hidden md:inline-flex"
                            >
                              {order.status}
                            </Badge>
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${
                                expandedOrder === order.orderId
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>
                      </button>

                      {expandedOrder === order.orderId && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t bg-gray-50"
                        >
                          <div className="p-4 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-medium">
                                  {new Date(order.orderDate).toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Total</p>
                                <p className="font-medium">
                                  ₹{order.total.toFixed(2)}
                                </p>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500 mb-2">
                                Items:
                              </p>
                              <ul className="space-y-2">
                                {order.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex justify-between items-center bg-white p-3 rounded-lg"
                                  >
                                    <span className="font-medium">
                                      {item.name}
                                    </span>
                                    <span className="text-gray-500">
                                      x {item.quantity}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="md:hidden">
                              <p className="text-sm text-gray-500">Status</p>
                              <Badge
                                variant={
                                  order.status === "Delivered"
                                    ? "success"
                                    : "secondary"
                                }
                                className="mt-1"
                              >
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sticky "Continue shopping" button for mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">
        <Button
          className="w-full"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}

