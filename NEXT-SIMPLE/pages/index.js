import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#2c5aa0' }}>Hotel Booking System</h1>
      <p style={{ margin: '20px 0', color: '#666' }}>
        Welcome to our hotel booking system
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link 
          href="/hotels"
          style={{
            backgroundColor: '#2c5aa0',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          View Hotels
        </Link>
        
        <Link 
          href="/bookings"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          View Bookings
        </Link>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>API Routes:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li><strong>/hotels</strong> - Hotel listing page</li>
          <li><strong>/hotels/[hotelId]</strong> - Hotel details page</li>
          <li><strong>GET /api/bookings</strong> - List bookings</li>
          <li><strong>POST /api/bookings</strong> - Create booking</li>
          <li><strong>GET /api/bookings/[bookingId]</strong> - Get booking</li>
          <li><strong>DELETE /api/bookings/[bookingId]</strong> - Cancel booking</li>
        </ul>
      </div>
    </div>
  );
}