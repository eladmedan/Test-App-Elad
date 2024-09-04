import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    console.log('Home component rendered');
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
        Press Me
      </button>
    </div>
  );
};

export default Home;
