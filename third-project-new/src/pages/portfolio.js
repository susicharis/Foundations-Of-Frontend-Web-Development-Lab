import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './portfolio.css';

// ---------------------------------------------------------------------- Third Requirement -------------------------------------------------  //

const apiKey = '16045176b40c1804813a4fec3b222ffb';

function Portfolio() {
  
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Bihać'); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [city]); 

  return (
    <div>
      <Navbar />
      <h1 className="h1staff">STAFF TEAM</h1>
      <h1 className="h1director">Director</h1>
      <h2 className="h2name">Behar Sušić <br /> Haris Sušić</h2>

      <div>
        <h2 className='h2example'>How much do you rate the STAFF? - Max:100!</h2>
        <p className='p1rating'>Rating: {count}</p>
        <button onClick={() => setCount(count + 1)} className='btnCount'>Increment</button>

        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p className='Error'>Error fetching data: {error}</p>
        ) : data ? (
          <div className='dataContainer'>
            <h3 className='h3weather'>Weather Data for {city}:</h3>
            <pre className='weatherData'>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
