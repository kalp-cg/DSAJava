import Link from 'next/link';
import { hotels } from '../../data/hotels';

export default function Hotels() {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#2c5aa0' }}>Hotels</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '20px 0' }}>
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: '#fff'
            }}
          >
            <h3 style={{ color: '#2c5aa0' }}>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <p><strong>Location:</strong> {hotel.location}</p>
            <p><strong>Rating:</strong> {hotel.rating}/5 ⭐</p>
            <p><strong>Price:</strong> ${hotel.price}/night</p>
            
            <Link 
              href={`/hotels/${hotel.id}`}
              style={{
                backgroundColor: '#2c5aa0',
                color: 'white',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: '5px',
                display: 'inline-block'
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link 
          href="/"
          style={{
            backgroundColor: '#666',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}