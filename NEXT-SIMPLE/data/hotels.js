// Hotel data (5 hotels)
export const hotels = [
  {
    id: '1',
    name: 'Grand Palace Hotel',
    description: 'Luxury 5-star hotel in the city center',
    price: 299,
    location: 'Downtown',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Ocean View Resort',
    description: 'Beautiful beachfront resort',
    price: 199,
    location: 'Beachfront',
    rating: 4.5
  },
  {
    id: '3',
    name: 'Mountain Lodge',
    description: 'Cozy mountain retreat',
    price: 149,
    location: 'Mountains',
    rating: 4.3
  },
  {
    id: '4',
    name: 'City Center Inn',
    description: 'Modern business hotel',
    price: 129,
    location: 'City Center',
    rating: 4.2
  },
  {
    id: '5',
    name: 'Garden Hotel',
    description: 'Charming boutique hotel',
    price: 179,
    location: 'Suburban',
    rating: 4.6
  }
];

export const getHotelById = (id) => {
  return hotels.find(hotel => hotel.id === id);
};

// Mock bookings data
export let bookings = [
  {
    id: '1',
    hotelId: '1',
    guestName: 'John Doe',
    checkIn: '2024-12-01',
    checkOut: '2024-12-05',
    totalPrice: 1196
  }
];

export const getAllBookings = () => bookings;

export const getBookingById = (id) => {
  return bookings.find(booking => booking.id === id);
};

export const addBooking = (booking) => {
  const newBooking = {
    ...booking,
    id: String(bookings.length + 1)
  };
  bookings.push(newBooking);
  return newBooking;
};

export const deleteBooking = (id) => {
  const index = bookings.findIndex(booking => booking.id === id);
  if (index !== -1) {
    return bookings.splice(index, 1)[0];
  }
  return null;
};