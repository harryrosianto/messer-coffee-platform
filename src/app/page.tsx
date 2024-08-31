import React from 'react';
import Link from 'next/link';
import harvestImage from '../assets/hero-green.png';
import article1 from '../assets/article1.png';
import article2 from '../assets/article2.jpg';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.jpg';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import angie from '../assets/angie.jpeg';
import keiko from '../assets/keiko.jpeg';
import marsha from '../assets/marsha.jpeg';
import harry from '../assets/harry.jpeg';
import meserCoffee from '../assets/meserCoffee.jpg';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#fefae0', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ backgroundImage: `url(${harvestImage.src})`, display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'left', maxWidth: '100%', minHeight: '100vh', margin: '0 auto' }}>
        <h1 style={{ fontSize: '4rem', paddingRight: '20rem', paddingLeft: '4rem', fontWeight: 'bold', color: '#fefae0', marginBottom: '4rem' }}>
          Empowering coffee farmers with AI-driven insights for optimal growth
        </h1>
        <div style={{ display: 'flex', paddingLeft: '4rem', justifyContent: 'left', gap: '1rem' }}>
          <Link href="./user_signin">
            <button style={{ backgroundColor: '#c4661f', color: '#fefae0', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s' }}>
              Get Started
            </button>
          </Link>
          <Link href="./ai-analysis">
            <button style={{ backgroundColor: 'transparent', border: '1px solid #fefae0', color: '#fefae0', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s' }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', padding: '4rem 2rem', backgroundColor: '#fefae0', maxWidth: '100%', margin: '0 auto' }}>
        <img
          src={meserCoffee.src}
          alt="meserCoffee Platform"
          style={{ width: '50%', maxWidth: '500px', height: 'auto', marginRight: '2rem', borderRadius: '12px' }}
        />
        <div style={{ maxWidth: '50%' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5f6f52', marginBottom: '1rem' }}>
            Introducing the meserCoffee Platform
          </h2>
          <p style={{ color: '#5f6f52' }}>
            This project aims to develop a generative AI-based application that will assist coffee farmers in determining the best methods for growing coffee, taking into account various environmental factors such as soil conditions, weather, geography, and more. The application allows users to input relevant environmental data, which will then be analyzed by AI to provide optimal recommendations for the coffee-growing process.
          </p>
          <p style={{ color: '#5f6f52' }}>
            Additionally, the application also serves as a platform connecting coffee farmers with potential buyers. Buyers can monitor the coffee production process in real-time, from tracking planting conditions, harvest timing, to predicting the quality of the coffee that will be produced. Coffee pricing information will also be available, providing transparency in the coffee supply chain, and facilitating more efficient and sustainable transactions.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center', backgroundColor: '#5f6f52' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fefae0', marginBottom: '5rem' }}>
          Key Features
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem' }}>
          <div style={{ maxWidth: '23rem', backgroundColor: '#fefae0', border: '1px solid #fefae0', borderRadius: '0.5rem', padding: '1.5rem 1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#c4661f', marginBottom: '1rem' }}>AI-Powered Analytics</h3>
            <p style={{ color: '#5f6f52' }}>Leverage advanced AI algorithms to optimize your coffee farming techniques and increase yield.</p>
            <br></br>
            <p style={{ color: '#5f6f52' }}>Learn more...</p>
          </div>
          <div style={{ maxWidth: '23rem', backgroundColor: '#fefae0', border: '1px solid #fefae0', borderRadius: '0.5rem', padding: '1.5rem 1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#c4661f', marginBottom: '1rem' }}>Real-Time Monitoring</h3>
            <p style={{ color: '#5f6f52' }}>Monitor your crops and farming conditions in real-time to make data-driven decisions.</p>
            <br></br>
            <br></br>
            <p style={{ color: '#5f6f52' }}>Learn more...</p>
          </div>
          <div style={{ maxWidth: '23rem', backgroundColor: '#fefae0', border: '1px solid #fefae0', borderRadius: '0.5rem', padding: '1.5rem 1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#c4661f', marginBottom: '1rem' }}>Market Insights</h3>
            <p style={{ color: '#5f6f52' }}>Stay ahead of market trends and demand with our detailed market analysis tools.</p>
            <br></br>
            <br></br>
            <p style={{ color: '#5f6f52' }}>Learn more...</p>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div style={{ padding: '4rem 2rem', textAlign: 'left', backgroundColor: '#fefae0', maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5f6f52', marginBottom: '2rem' }}>
          Articles about Coffee Farming
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <img
              src={article1.src}
              alt="The Future of Sustainable Coffee Farming"
              style={{ width: '100%', maxWidth: '100%', height: '40vh', marginBottom: '1rem', borderRadius: '12px', objectFit: 'cover' }}
            />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52' }}>The Future of Sustainable Coffee Farming</h3>
            <p style={{ color: '#5f6f52' }}>Explore how sustainable practices are transforming the coffee industry and ensuring better yields.</p>
          </div>
          <div>
            <img
              src={article2.src}
              alt="Top 10 Techniques to Improve Coffee Bean Quality"
              style={{ width: '100%', maxWidth: '100%', height: '40vh', marginBottom: '1rem', borderRadius: '12px', objectFit: 'cover' }}
            />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52' }}>Top 10 Techniques to Improve Coffee Bean Quality</h3>
            <p style={{ color: '#5f6f52' }}>Learn the best techniques to enhance the quality of your coffee beans, from soil management to harvest timing.</p>
          </div>
          <div>
            <img
              src={article3.src}
              alt="Using AI to Predict Coffee Yield and Quality"
              style={{ width: '100%', maxWidth: '100%', height: '40vh', marginBottom: '1rem', borderRadius: '12px', objectFit: 'cover' }}
            />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52' }}>Using AI to Predict Coffee Yield and Quality</h3>
            <p style={{ color: '#5f6f52' }}>Discover how AI can predict your coffee yield and quality, helping you plan your harvest more effectively.</p>
          </div>
          <div>
            <img
              src={article4.src}
              alt="Innovations in Coffee Harvesting Technology"
              style={{ width: '100%', maxWidth: '100%', height: '40vh', marginBottom: '1rem', borderRadius: '12px', objectFit: 'cover' }}
            />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52' }}>Innovations in Coffee Harvesting Technology</h3>
            <p style={{ color: '#5f6f52' }}>Explore the latest technological advancements in coffee harvesting that are improving efficiency and sustainability.</p>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#fefae0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5f6f52', marginBottom: '2rem' }}>
          Our Partners
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
          <img
            src={partner1.src}
            alt="Partner 1"
            style={{
              height: '100px', // Fixed height
              objectFit: 'contain', // Maintain aspect ratio
              maxWidth: '30%', // Limit max width
              borderRadius: '12px'
            }}
          />
          <img
            src={partner2.src}
            alt="Partner 2"
            style={{
              height: '100px', // Fixed height
              objectFit: 'contain', // Maintain aspect ratio
              maxWidth: '30%', // Limit max width
              borderRadius: '12px'
            }}
          />
          <img
            src={partner3.src}
            alt="Partner 3"
            style={{
              height: '100px', // Fixed height
              objectFit: 'contain', // Maintain aspect ratio
              maxWidth: '30%', // Limit max width
              borderRadius: '12px'
            }}
          />
        </div>
      </div>

      {/* Our Development Team Section */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#fefae0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5f6f52', marginBottom: '2rem' }}>
          Our Development Team
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={angie.src} alt="Team Member 1" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52', marginTop: '1rem' }}>Eugenia Angela Salsabila</h3>
            <p style={{ color: '#5f6f52' }}>Backend Developer</p>
          </div>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={keiko.src} alt="Team Member 2" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52', marginTop: '1rem' }}>Keiko Joceliandita</h3>
            <p style={{ color: '#5f6f52' }}>Data Engineer</p>
          </div>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={marsha.src} alt="Team Member 3" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52', marginTop: '1rem' }}>Marshanda Dwi Putri</h3>
            <p style={{ color: '#5f6f52' }}>Data Engineer</p>
          </div>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={harry.src} alt="Team Member 4" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#5f6f52', marginTop: '1rem' }}>Harry Rosianto</h3>
            <p style={{ color: '#5f6f52' }}>Frontend Engineer</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
