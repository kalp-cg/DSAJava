import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      const result = await response.json();
      if (result.success) {
        setBookings(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    if (confirm('Cancel this booking?')) {
      try {
        const response = await fetch(`/api/bookings/${bookingId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setBookings(bookings.filter(b => b.id !== bookingId));
          alert('Booking cancelled!');
        }
      } catch (error) {
        alert('Failed to cancel booking');
      }
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/" style={{ color: '#2c5aa0', marginBottom: '20px', display: 'block' }}>
        ← Back to Home
      </Link>
      
      <h1 style={{ color: '#2c5aa0' }}>Bookings</h1>

      {bookings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>No bookings found</p>
          <Link href="/hotels" style={{ backgroundColor: '#2c5aa0', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>
            Browse Hotels
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {bookings.map((booking) => (
            <div key={booking.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#2c5aa0' }}>{booking.hotelName}</h3>
              <p><strong>Guest:</strong> {booking.guestName}</p>
              <p><strong>Check-in:</strong> {booking.checkIn}</p>
              <p><strong>Check-out:</strong> {booking.checkOut}</p>
              <p><strong>Total:</strong> ${booking.totalPrice}</p>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <Link href={`/hotels/${booking.hotelId}`} style={{ backgroundColor: '#2c5aa0', color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: '4px' }}>
                  View Hotel
                </Link>
                <button onClick={() => cancelBooking(booking.id)} style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}