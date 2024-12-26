export interface Addon {
  id: string;
  name: string;
  price: number;
  perHour?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  duration?: string;
  perNight?: boolean;
  perHour?: boolean;
  description?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  image?: string;
  items: MenuItem[];
  addons: Addon[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  image: string;
  subCategories: SubCategory[];
  timing: string;
}

export const services: ServiceCategory[] = [
  {
    id: 'food',
    name: 'Order Food',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    timing: '7:00 AM - 10:00 PM',
    subCategories: [
      {
        id: 'breakfast',
        name: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww',
        items: [
          { id: 'idli', name: 'Idli Sambar', price: 80, image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9oYXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'dosa', name: 'Masala Dosa', price: 100, image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9oYXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'poha', name: 'Poha', price: 60, image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9oYXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'upma', name: 'Upma', price: 70, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXBtYXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'puri', name: 'Puri Bhaji', price: 90, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyaSUyMGJoYWppfGVufDB8fDB8fHww' },
          { id: 'paratha', name: 'Aloo Paratha', price: 85, image: 'https://images.unsplash.com/photo-1603033172872-c2525115c7b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxvbyUyMHBhcmF0aGF8ZW58MHx8MHx8fDA%3D' },
          { id: 'vada', name: 'Medu Vada', price: 75, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hob2xlJTIwYmhhdHVyZXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'uttapam', name: 'Uttapam', price: 95, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hob2xlJTIwYmhhdHVyZXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'chhole', name: 'Chhole Bhature', price: 110, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hob2xlJTIwYmhhdHVyZXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'sandwich', name: 'Veg Sandwich', price: 65, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D' },
          { id: 'pancakes', name: 'Banana Pancakes', price: 120, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hJTIwcGFuY2FrZXN8ZW58MHx8MHx8fDA%3D' },
          { id: 'fruits', name: 'Fresh Fruit Platter', price: 150, image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBwbGF0dGVyfGVufDB8fDB8fHww' },
          { id: 'cereal', name: 'Cereal with Milk', price: 100, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D' },
          { id: 'juice', name: 'Fresh Orange Juice', price: 70, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D' },
        ],
        addons: [
          { id: 'chutney', name: 'Extra Chutney', price: 20 },
          { id: 'sambar', name: 'Extra Sambar', price: 30 },
          { id: 'butter', name: 'Extra Butter', price: 15 },
        ]
      },
      {
        id: 'lunch',
        name: 'Lunch',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHVuY2h8ZW58MHx8MHx8fDA%3D',
        items: [
          { id: 'thali', name: 'Veg Thali', price: 200, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwdGhhbGl8ZW58MHx8MHx8fDA%3D' },
          { id: 'biryani', name: 'Chicken Biryani', price: 250, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'paneer', name: 'Paneer Butter Masala', price: 180, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww' },
          { id: 'dal', name: 'Dal Makhani', price: 150, image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFsJTIwbWFraGFuaXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'fish', name: 'Fish Curry', price: 220, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww' },
          { id: 'chicken', name: 'Butter Chicken', price: 240, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'veg-pulao', name: 'Veg Pulao', price: 160, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwcHVsYW98ZW58MHx8MHx8fDA%3D' },
          { id: 'malai-kofta', name: 'Malai Kofta', price: 190, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsYWklMjBrb2Z0YXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'chana-masala', name: 'Chana Masala', price: 140, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhbmElMjBtYXNhbGF8ZW58MHx8MHx8fDA%3D' },
          { id: 'aloo-gobi', name: 'Aloo Gobi', price: 130, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxvbyUyMGdvYml8ZW58MHx8MHx8fDA%3D' },
          { id: 'tandoori-roti', name: 'Tandoori Roti', price: 30, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZG9vcmklMjByb3RpfGVufDB8fDB8fHww' },
          { id: 'naan', name: 'Butter Naan', price: 40, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyJTIwbmFhbnxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'jeera-rice', name: 'Jeera Rice', price: 100, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVlcmElMjByaWNlfGVufDB8fDB8fHww' },
          { id: 'raita', name: 'Boondi Raita', price: 60, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vbmRpJTIwcmFpdGF8ZW58MHx8MHx8fDA%3D' },
          { id: 'papad', name: 'Roasted Papad', price: 20, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9hc3RlZCUyMHBhcGFkfGVufDB8fDB8fHww' },
        ],
        addons: [
          { id: 'extra-gravy', name: 'Extra Gravy', price: 40 },
          { id: 'extra-rice', name: 'Extra Rice', price: 50 },
          { id: 'extra-naan', name: 'Extra Naan', price: 30 },
        ]
      },
      {
        id: 'dinner',
        name: 'Dinner',
        image: 'https://images.unsplash.com/photo-1594646689524-a60057220202?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG5uZXJ8ZW58MHx8MHx8fDA%3D',
        items: [
          { id: 'tandoori-chicken', name: 'Tandoori Chicken', price: 280, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww' },
          { id: 'mutton-rogan-josh', name: 'Mutton Rogan Josh', price: 300, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXV0dG9uJTIwcm9nYW4lMjBqb3NofGVufDB8fDB8fHww' },
          { id: 'veg-kofta', name: 'Veg Kofta Curry', price: 200, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwa29mdGF8ZW58MHx8MHx8fDA%3D' },
          { id: 'palak-paneer', name: 'Palak Paneer', price: 190, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D' },
          { id: 'chicken-tikka', name: 'Chicken Tikka Masala', price: 260, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww' },
          { id: 'dal-tadka', name: 'Dal Tadka', price: 140, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFsJTIwdGFka2F8ZW58MHx8MHx8fDA%3D' },
          { id: 'veg-biryani', name: 'Veg Biryani', price: 220, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'fish-fry', name: 'Fish Fry', price: 240, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'mushroom-masala', name: 'Mushroom Masala', price: 180, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaHJvb20lMjBtYXNhbGF8ZW58MHx8MHx8fDA%3D' },
        ],
        addons: [
          { id: 'extra-spicy', name: 'Extra Spicy', price: 20 },
          { id: 'extra-sweet', name: 'Extra Sweet', price: 20 },
          { id: 'extra-portion', name: 'Extra Portion', price: 100 },
        ]
      },
    ]
  },
  {
    id: 'massage',
    name: 'Book Massage and Spa',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww',
    timing: '9:00 AM - 9:00 PM',
    subCategories: [
      {
        id: 'ayurvedic',
        name: 'Ayurvedic Treatments',
        items: [
          { id: 'abhyanga', name: 'Abhyanga', price: 2500, duration: '60 min', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXl1cnZlZGljJTIwbWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'shirodhara', name: 'Shirodhara', price: 3000, duration: '45 min', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcm9kaGFyYXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'kizhi', name: 'Podi Kizhi', price: 2800, duration: '60 min', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww' },
          { id: 'pizhichil', name: 'Pizhichil', price: 3500, duration: '60 min', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww' },
          { id: 'udvartana', name: 'Udvartana', price: 2700, duration: '45 min', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww' },
        ],
        addons: [
          { id: 'aromatherapy', name: 'Aromatherapy', price: 500 },
          { id: 'herbal-steam', name: 'Herbal Steam Bath', price: 800 },
          { id: 'consultation', name: 'Ayurvedic Consultation', price: 1000 },
        ]
      },
      {
        id: 'western',
        name: 'Western Massages',
        items: [
          { id: 'swedish', name: 'Swedish Massage', price: 2200, duration: '60 min', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlZGlzaCUyMG1hc3NhZ2V8ZW58MHx8MHx8fDA%3D' },
          { id: 'deep-tissue', name: 'Deep Tissue Massage', price: 2500, duration: '60 min', image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcCUyMHRpc3N1ZSUyMG1hc3NhZ2V8ZW58MHx8MHx8fDA%3D' },
          { id: 'hot-stone', name: 'Hot Stone Massage', price: 2800, duration: '75 min', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwc3RvbmUlMjBtYXNzYWdlfGVufDB8fDB8fHww' },
          { id: 'aromatherapy', name: 'Aromatherapy Massage', price: 2400, duration: '60 min', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww' },
          { id: 'sports', name: 'Sports Massage', price: 2300, duration: '60 min', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww' },
        ],
        addons: [
          { id: 'hot-towel', name: 'Hot Towel Treatment', price: 300 },
          { id: 'essential-oils', name: 'Premium Essential Oils', price: 400 },
          { id: 'extended-time', name: 'Extended Time (30 min)', price: 1000 },
        ]
      },
    ]
  },
  {
    id: 'laundry',
    name: 'Laundry Services',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D',
    timing: '8:00 AM - 8:00 PM',
    subCategories: [
      {
        id: 'wash-and-fold',
        name: 'Wash and Fold',
        items: [
          { id: 'regular-load', name: 'Regular Load (up to 5 kg)', price: 300, duration: '24 hours', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'large-load', name: 'Large Load (5-10 kg)', price: 500, duration: '24 hours', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'extra-large-load', name: 'Extra Large Load (10-15 kg)', price: 700, duration: '36 hours', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'delicates', name: 'Delicates (up to 2 kg)', price: 400, duration: '48 hours', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'bedding', name: 'Bedding (per set)', price: 600, duration: '48 hours', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D' },
        ],
        addons: [
          { id: 'stain-removal', name: 'Stain Removal', price: 100 },
          { id: 'fabric-softener', name: 'Premium Fabric Softener', price: 50 },
          { id: 'ironing', name: 'Ironing Service', price: 200 },
        ]
      },
      {
        id: 'dry-cleaning',
        name: 'Dry Cleaning',
        items: [
          { id: 'suit', name: 'Suit (2 piece)', price: 800, duration: '48 hours', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D' },
          { id: 'dress', name: 'Dress', price: 600, duration: '48 hours', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D' },
          { id: 'coat', name: 'Coat', price: 700, duration: '48 hours', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D' },
          { id: 'jacket', name: 'Jacket', price: 500, duration: '48 hours', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D' },
          { id: 'trousers', name: 'Trousers', price: 300, duration: '24 hours', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D' },
        ],
        addons: [
          { id: 'express-dry-clean', name: 'Express Service (24 hours)', price: 300 },
          { id: 'starch', name: 'Starch Application', price: 100 },
          { id: 'moth-proofing', name: 'Moth Proofing', price: 200 },
        ]
      },
    ]
  },
  {
    id: 'room-upgrade',
    name: 'Room Upgrade',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
    timing: '24 hours',
    subCategories: [
      {
        id: 'room-types',
        name: 'Room Types',
        items: [
          { id: 'deluxe', name: 'Deluxe Room', price: 2000, perNight: true, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
          { id: 'executive', name: 'Executive Suite', price: 3500, perNight: true, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
          { id: 'family', name: 'Family Room', price: 4000, perNight: true, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
          { id: 'ocean-view', name: 'Ocean View Room', price: 4500, perNight: true, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
          { id: 'penthouse', name: 'Penthouse Suite', price: 10000, perNight: true, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' },
        ],
        addons: [
          { id: 'early-checkin', name: 'Early Check-in', price: 1000 },
          { id: 'late-checkout', name: 'Late Check-out', price: 1000 },
          { id: 'airport-transfer', name: 'Airport Transfer', price: 1500 },
        ]
      },
    ]
  },
  {
    id: 'extended-stay',
    name: 'Extended Stay',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D',
    timing: '24 hours',
    subCategories: [
      {
        id: 'weekly-rates',
        name: 'Weekly Rates',
        items: [
          { id: 'studio-weekly', name: 'Studio Apartment - Weekly', price: 15000, duration: '7 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'one-bed-weekly', name: 'One Bedroom Suite - Weekly', price: 21000, duration: '7 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWarch%7Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'two-bed-weekly', name: 'Two Bedroom Suite - Weekly', price: 28000, duration: '7 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'executive-weekly', name: 'Executive Suite - Weekly', price: 35000, duration: '7 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'penthouse-weekly', name: 'Penthouse - Weekly', price: 70000, duration: '7 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
        ],
        addons: [
          { id: 'cleaning-service', name: 'Daily Cleaning Service', price: 500 },
          { id: 'grocery-delivery', name: 'Grocery Delivery (Weekly)', price: 1000 },
          { id: 'workspace-setup', name: 'Workspace Setup', price: 2000 },
        ]
      },
      {
        id: 'monthly-rates',
        name: 'Monthly Rates',
        items: [
          { id: 'studio-monthly', name: 'Studio Apartment - Monthly', price: 50000, duration: '30 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'one-bed-monthly', name: 'One Bedroom Suite - Monthly', price: 70000, duration: '30 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'two-bed-monthly', name: 'Two Bedroom Suite - Monthly', price: 95000, duration: '30 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'executive-monthly', name: 'Executive Suite - Monthly', price: 120000, duration: '30 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
          { id: 'penthouse-monthly', name: 'Penthouse - Monthly', price: 250000, duration: '30 nights', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D' },
        ],
        addons: [
          { id: 'parking-space', name: 'Dedicated Parking Space', price: 5000 },
          { id: 'gym-membership', name: 'Gym Membership', price: 3000 },
          { id: 'business-center', name:'Business Center Access', price: 2000 },
        ]
      },
    ]
  },
  {
    id: 'book-tour',
    name: 'Book Tour',
    image: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvdXIlMjBndWlkZXxlbnwwfHwwfHx8MA%3D%3D',
    timing: '9:00 AM - 6:00 PM',
    subCategories: [
      {
        id: 'city-tours',
        name: 'City Tours',
        items: [
          { id: 'heritage-walk', name: 'Heritage Walk', price: 1500, duration: '3 hours', image: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyaXRhZ2UlMjB3YWxrfGVufDB8fDB8fHww' },
          { id: 'food-tour', name: 'Local Food Tour', price: 2000, duration: '4 hours', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D' },
          { id: 'night-tour', name: 'City by Night Tour', price: 1800, duration: '3 hours', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHQlMjB0b3VyfGVufDB8fDB8fHww' },
          { id: 'museum-tour', name: 'Museum Hopping', price: 2200, duration: '5 hours', image: 'https://images.unsplash.com/photo-1565060169181-34d7c641b664?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'architecture-tour', name: 'Architectural Marvels Tour', price: 1700, duration: '4 hours', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D' },
        ],
        addons: [
          { id: 'private-guide', name: 'Private Guide', price: 1000 },
          { id: 'transport', name: 'Air-conditioned Transport', price: 800 },
          { id: 'meal-included', name: 'Meal Included', price: 500 },
        ]
      },
      {
        id: 'adventure-tours',
        name: 'Adventure Tours',
        items: [
          { id: 'trekking', name: 'Mountain Trekking', price: 3000, duration: '8 hours', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D' },
          { id: 'water-sports', name: 'Water Sports Package', price: 4000, duration: '6 hours', image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D' },
          { id: 'wildlife-safari', name: 'Wildlife Safari', price: 5000, duration: 'Full day', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmUlMjBzYWZhcml8ZW58MHx8MHx8fDA%3D' },
          { id: 'rock-climbing', name: 'Rock Climbing Experience', price: 2500, duration: '4 hours', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMGNsaW1iaW5nfGVufDB8fDB8fHww' },
          { id: 'hot-air-balloon', name: 'Hot Air Balloon Ride', price: 8000, duration: '3 hours', image: 'https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwYWlyJTIwYmFsbG9vbnxlbnwwfHwwfHx8MA%3D%3D' },
        ],
        addons: [
          { id: 'gear-rental', name: 'Adventure Gear Rental', price: 1500 },
          { id: 'photo-package', name: 'Professional Photo Package', price: 2000 },
          { id: 'picnic-lunch', name: 'Picnic Lunch', price: 600 },
        ]
      },
      {
        id: 'cultural-tours',
        name: 'Cultural Tours',
        items: [
          { id: 'cooking-class', name: 'Traditional Cooking Class', price: 2500, duration: '4 hours', image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZyUyMGNsYXNzfGVufDB8fDB8fHww' },
          { id: 'art-workshop', name: 'Local Art Workshop', price: 1800, duration: '3 hours', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D' },
          { id: 'dance-performance', name: 'Folk Dance Performance', price: 1200, duration: '2 hours', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9sayUyMGRhbmNlfGVufDB8fDB8fHww' },
          { id: 'temple-tour', name: 'Temple and Spiritual Tour', price: 1600, duration: '5 hours', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9sayUyMGRhbmNlfGVufDB8fDB8fHww' },
          { id: 'village-visit', name: 'Traditional Village Visit', price: 2000, duration: '6 hours', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9sayUyMGRhbmNlfGVufDB8fDB8fHww' },
        ],
        addons: [
          { id: 'traditional-costume', name: 'Traditional Costume Rental', price: 800 },
          { id: 'language-guide', name: 'Multilingual Guide', price: 1200 },
          { id: 'souvenir-package', name: 'Handcrafted Souvenir Package', price: 1000 },
        ]
      },
    ]
  },
  {
    id: 'book-cabs',
    name: 'Book Cabs',
    image: 'https://images.unsplash.com/photo-1621976360623-004223992275?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D',
    timing: '24 hours',
    subCategories: [
      {
        id: 'airport-transfers',
        name: 'Airport Transfers',
        items: [
          { id: 'sedan-airport', name: 'Sedan - Airport Transfer', price: 1500, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'suv-airport', name: 'SUV - Airport Transfer', price: 2000, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'luxury-airport', name: 'Luxury Car - Airport Transfer', price: 3500, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'minivan-airport', name: 'Minivan - Airport Transfer', price: 2500, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
        ],
        addons: [
          { id: 'meet-greet', name: 'Meet & Greet Service', price: 500 },
          { id: 'child-seat', name: 'Child Seat', price: 300 },
          { id: 'wifi', name: 'In-car Wi-Fi', price: 200 },
        ]
      },
      {
        id: 'hourly-rentals',
        name: 'Hourly Rentals',
        items: [
          { id: 'economy-hourly', name: 'Economy Car - Hourly Rental', price: 300, perHour: true, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'sedan-hourly', name: 'Sedan - Hourly Rental', price: 400, perHour: true, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'suv-hourly', name: 'SUV - Hourly Rental', price: 500, perHour: true, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'luxury-hourly', name: 'Luxury Car - Hourly Rental', price: 800, perHour: true, image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
        ],
        addons: [
          { id: 'driver-language', name: 'Multilingual Driver', price: 200, perHour: true },
          { id: 'refreshments', name: 'In-car Refreshments', price: 150 },
          { id: 'customized-route', name: 'Customized Route Planning', price: 300 },
        ]
      },
      {
        id: 'day-trips',
        name: 'Day Trips',
        items: [
          { id: 'nearby-city', name: 'Nearby City Tour', price: 5000, duration: 'Full day', image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'beach-trip', name: 'Beach Day Trip', price: 6000, duration: 'Full day', image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'hill-station', name: 'Hill Station Excursion', price: 7000, duration: 'Full day', image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
          { id: 'wildlife-sanctuary', name: 'Wildlife Sanctuary Visit', price: 8000, duration: 'Full day', image: 'https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg' },
        ],
        addons: [
          { id: 'packed-lunch', name: 'Packed Lunch', price: 500 },
          { id: 'guide-service', name: 'Professional Guide Service', price: 1500 },
          { id: 'photography', name: 'Photography Service', price: 2000 },
        ]
      },
    ]
  },
];

export function getMenuItem(categoryId: string, subCategoryId: string, itemId: string): MenuItem | undefined {
  const category = services.find(cat => cat.id === categoryId);
  const subCategory = category?.subCategories.find(subCat => subCat.id === subCategoryId);
  return subCategory?.items.find(item => item.id === itemId);
}

export function getAvailableAddons(categoryId: string, subCategoryId: string): Addon[] {
  const category = services.find(cat => cat.id === categoryId);
  const subCategory = category?.subCategories.find(subCat => subCat.id === subCategoryId);
  return subCategory?.addons || [];
}

export function getAddonsByItemId(itemId: string): Addon[] {
  for (const category of services) {
    for (const subCategory of category.subCategories) {
      const item = subCategory.items.find(item => item.id === itemId);
      if (item) {
        return subCategory.addons || [];
      }
    }
  }
  return [];
}

