'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Car, UtensilsCrossed, SpadeIcon as Spa, Shirt, ArrowUpCircle, CalendarRange, MapPin, User, BellRing, Phone, Mail, MessageSquare, Clock, Compass, Luggage, KeyRound, Search } from 'lucide-react'
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Toaster } from 'react-hot-toast'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "react-hot-toast"


const services = [
  {
    icon: <UtensilsCrossed className="h-6 w-6" />,
    id: 'food',
    title: "Order Food",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop"
  },
  {
    icon: <Spa className="h-6 w-6" />,
    id: 'massage',
    title: "Book Massage & Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=500&auto=format&fit=crop"
  },
  {
    icon: <Shirt className="h-6 w-6" />,
    id: 'laundry',
    title: "Laundry",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=500&auto=format&fit=crop"
  },
  {
    icon: <ArrowUpCircle className="h-6 w-6" />,
    title: "Room Upgrade",
    id: 'room-upgrade',
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=500&auto=format&fit=crop"
  },
  {
    icon: <CalendarRange className="h-6 w-6" />,
    title: "Extend Stay",
    id: 'extended-stay',
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=500&auto=format&fit=crop"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    id: 'book-tour',
    title: "Book Tour",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=500&auto=format&fit=crop"
  },
  {
    icon: <Car className="h-6 w-6" />,
    id: 'book-cabs',
    title: "Book Cabs",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500&auto=format&fit=crop",
    gridSpan: true
  }
]

const menuItems = [
  {
    category: "Breakfast",
    available: "6:30 AM - 11:00 AM",
    items: [
      { name: "Continental Breakfast", price: "$25" },
      { name: "American Breakfast", price: "$30" },
      { name: "Healthy Start", price: "$28" },
    ]
  },
  {
    category: "All Day Dining",
    available: "11:00 AM - 10:00 PM",
    items: [
      { name: "Club Sandwich", price: "$22" },
      { name: "Caesar Salad", price: "$18" },
      { name: "Margherita Pizza", price: "$24" },
    ]
  }
]

const receptionServices = [
  {
    icon: <Compass className="h-5 w-5 text-orange-500" />,
    title: "Concierge Services",
    description: "Restaurant reservations, travel arrangements, and local recommendations",
    phone: "Dial 1234",
  },
  {
    icon: <Luggage className="h-5 w-5 text-orange-500" />,
    title: "Luggage Assistance",
    description: "Baggage storage and porter service available 24/7",
    phone: "Dial 1235",
  },
  {
    icon: <KeyRound className="h-5 w-5 text-orange-500" />,
    title: "Check-in/Check-out",
    description: "Express check-out and late check-out requests",
    phone: "Dial 1236",
  },
  {
    icon: <Search className="h-5 w-5 text-orange-500" />,
    title: "Lost & Found",
    description: "Assistance with locating misplaced items",
    phone: "Dial 1237",
  },
]



function ReportServiceDialog() {
  const handleSubmit = (event) => {
    event.preventDefault()

    toast.success("Service report submitted successfully!");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-[48%] bg-orange-500 text-white hover:bg-orange-600">
          Report Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white border-2 border-orange-500">
        <DialogHeader>
          <DialogTitle className="text-orange-700">Report a Service Issue</DialogTitle>
          <DialogDescription className="text-brown-600">
            Please provide details about the service you'd like to report
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="room-cleaning">Room Cleaning</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="amenities">Amenities</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="room">Room Number</Label>
            <Input id="room" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
              Submit Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function ReceptionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="w-[48%] bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-100">
          Contact Reception
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-2 border-orange-500">
        <DialogHeader>
          <DialogTitle className="text-orange-700">Reception Services</DialogTitle>
          <DialogDescription className="text-brown-600">
            Our front desk team is available 24/7
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 py-4">
            
            <div className="space-y-4">
              {receptionServices.map((service) => (
                <div key={service.title} className="space-y-1">
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <h4 className="font-medium text-orange-700">{service.title}</h4>
                  </div>
                  <p className="text-sm text-brown-600 ml-7">{service.description}</p>
                  <p className="text-sm font-medium text-orange-600 ml-7">{service.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
            <BellRing className="mr-2 h-4 w-4" />
            Request Assistance
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Main Component
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white container mx-auto">
      
      <Navbar />

      <main className="container px-4 py-6 space-y-8">
        {/* Banner */}
        <Card className="relative w-full h-64 overflow-hidden rounded-xl bg-white">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
            alt="Hotel Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Welcome to BiteCart
            </h1>
            <p className="text-white/90 max-w-md">
              Discover our premium services and make your stay extraordinary
            </p>
          </div>
        </Card>

        {/* Services Grid */}
        <div className="space-y-6 pb-20">
          <h2 className="text-xl font-semibold text-orange-700">What do you want to do?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/showcase/${service.id}`}
                className={`flex flex-col ${
                  service.gridSpan ? 'md:col-span-2' : ''
                } rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white`}
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <Button
                  variant="ghost"
                  className="w-full py-3 md:py-4 border-x border-b rounded-t-none border-orange-200 hover:bg-orange-50"
                >
                  <div className="flex items-center gap-2 text-orange-700">
                    {service.icon}
                    <span className="font-medium text-sm md:text-base">{service.title}</span>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-lg border-t border-orange-200">
          <div className="container mx-auto flex justify-between items-center max-w-lg">
            <ReportServiceDialog />
            <ReceptionDialog />
          </div>
        </div>
      </main>
    </div>
  )
}

