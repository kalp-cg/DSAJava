import { getAllBookings, addBooking, getHotelById } from '../../data/hotels';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET /api/bookings - List all bookings
    try {
      const bookings = getAllBookings();
      const enhancedBookings = bookings.map(booking => {
        const hotel = getHotelById(booking.hotelId);
        return {
          ...booking,
          hotelName: hotel ? hotel.name : 'Unknown Hotel'
        };
      });

      res.status(200).json({
        success: true,
        data: enhancedBookings
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to get bookings'
      });
    }
  } 
  else if (req.method === 'POST') {
    // POST /api/bookings - Create new booking
    try {
      const { hotelId, guestName, checkIn, checkOut } = req.body;

      if (!hotelId || !guestName || !checkIn || !checkOut) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      const hotel = getHotelById(hotelId);
      if (!hotel) {
        return res.status(404).json({
          success: false,
          message: 'Hotel not found'
        });
      }

      // Calculate price
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      const totalPrice = nights * hotel.price;

      const newBooking = addBooking({
        hotelId,
        guestName,
        checkIn,
        checkOut,
        totalPrice
      });

      res.status(201).json({
        success: true,
        data: newBooking
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to create booking'
      });
    }
  } 
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`
    });
  }
}