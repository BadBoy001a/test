import { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
          .then(data => setData(data));
      console.log(data);
      

    return () => {
      
    };
  }, []); 

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default FetchDataComponent