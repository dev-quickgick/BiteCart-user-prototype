import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { storage } from '../utils/Storage';
import NavBar from '../components/Navbar';
import { ArrowLeft, CheckCircle } from 'lucide-react';

function OrderPlacedPage() {
  const [orderDetails, setOrderDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.order) {
      setOrderDetails(location.state.order);
    } else {
      const previousOrders = storage.getItem('previousOrders', []);
      if (previousOrders.length > 0) {
        setOrderDetails(previousOrders[previousOrders.length - 1]);
      }
    }
  }, [location]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <NavBar />
      <div className="container mx-auto p-4">
        
        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardHeader className="bg-orange-100">
            <CardTitle className="text-center text-brown-800">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              Order Placed Successfully
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 text-brown-700 p-4 mb-8" role="alert">
              <p className="font-bold">Thank you for your order!</p>
              <p>Your order has been received and is being processed.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brown-800">Order Details</h2>
              <p className="text-brown-600"><strong>Order ID:</strong> {orderDetails.orderId}</p>
              <p className="text-brown-600"><strong>Status:</strong> {orderDetails.status}</p>
              <p className="text-brown-600"><strong>Estimated Time:</strong> {orderDetails.estimatedTime}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brown-800">Order Summary</h2>
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2 text-brown-600">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-orange-200 mt-4 pt-4">
                <div className="flex justify-between items-center font-bold text-brown-800">
                  <span>Total</span>
                  <span>₹{orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link to="/">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default OrderPlacedPage;

