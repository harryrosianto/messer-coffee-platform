import { FaTools } from 'react-icons/fa';

const UnderMaintenance = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#5f6f52',
      color: '#333'
    }}>
      <FaTools size={80} color="#fefae0" />
      <h1 style={{ margin: '20px 0', fontSize: '2.5rem', color: '#fefae0' }}>We&apos;ll be back soon!</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', color: '#fefae0'}}>
        Our website is currently undergoing scheduled maintenance. We apologize for any inconvenience.
        Please check back later. Thank you for your patience!
      </p>
    </div>
  );
};

export default UnderMaintenance;
