import { getBookingById, deleteBooking, getHotelById } from '../../../data/hotels';

export default function handler(req, res) {
  const { bookingId } = req.query;

  if (req.method === 'GET') {
    // GET /api/bookings/[bookingId] - Get specific booking
    try {
      const booking = getBookingById(bookingId);

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }

      const hotel = getHotelById(booking.hotelId);
      const enhancedBooking = {
        ...booking,
        hotelName: hotel ? hotel.name : 'Unknown Hotel'
      };

      res.status(200).json({
        success: true,
        data: enhancedBooking
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to get booking'
      });
    }
  } 
  else if (req.method === 'DELETE') {
    // DELETE /api/bookings/[bookingId] - Cancel booking
    try {
      const booking = getBookingById(bookingId);

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }

      const deletedBooking = deleteBooking(bookingId);

      if (deletedBooking) {
        res.status(200).json({
          success: true,
          message: 'Booking cancelled successfully',
          data: deletedBooking
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Failed to cancel booking'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to cancel booking'
      });
    }
  } 
  else {
    res.setHeader('Allow', ['GET', 'DELETE']);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`
    });
  }
}