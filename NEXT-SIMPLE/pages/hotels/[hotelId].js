import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { hotels, getHotelById } from '../../data/hotels';

export default function HotelDetail({ hotel }) {
  const router = useRouter();
  const [booking, setBooking] = useState({
    guestName: '',
    checkIn: '',
    checkOut: ''
  });
  const [message, setMessage] = useState('');

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!hotel) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Hotel Not Found</h1>
        <Link href="/hotels">Back to Hotels</Link>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        hotelId: hotel.id,
        guestName: booking.guestName,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut
      })
    });

    if (response.ok) {
      const result = await response.json();
      setMessage(`Booking successful! ID: ${result.data.id}`);
      setBooking({ guestName: '', checkIn: '', checkOut: '' });
    } else {
      setMessage('Booking failed');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link href="/hotels" style={{ color: '#2c5aa0', marginBottom: '20px', display: 'block' }}>
        ← Back to Hotels
      </Link>

      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
        <h1 style={{ color: '#2c5aa0' }}>{hotel.name}</h1>
        <p>{hotel.description}</p>
        <p><strong>Location:</strong> {hotel.location}</p>
        <p><strong>Rating:</strong> {hotel.rating}/5 ⭐</p>
        <p><strong>Price:</strong> ${hotel.price}/night</p>

        <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h3>Book This Hotel</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Guest Name:</label>
              <input
                type="text"
                value={booking.guestName}
                onChange={(e) => setBooking({...booking, guestName: e.target.value})}
                required
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>Check-in:</label>
                <input
                  type="date"
                  value={booking.checkIn}
                  onChange={(e) => setBooking({...booking, checkIn: e.target.value})}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>Check-out:</label>
                <input
                  type="date"
                  value={booking.checkOut}
                  onChange={(e) => setBooking({...booking, checkOut: e.target.value})}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
              </div>
            </div>
            
            <button
              type="submit"
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Book Now
            </button>
          </form>
          
          {message && (
            <div style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: message.includes('successful') ? '#d4edda' : '#f8d7da',
              borderRadius: '4px'
            }}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = hotels.map((hotel) => ({
    params: { hotelId: hotel.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const hotel = getHotelById(params.hotelId);

  if (!hotel) {
    return { notFound: true };
  }

  return { props: { hotel } };
}