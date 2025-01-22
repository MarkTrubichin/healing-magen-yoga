import React, { useEffect } from 'react';
import Header from './components/header';
import { fetchData } from './api';


function App() {
  useEffect(() => {
    fetchData().catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
