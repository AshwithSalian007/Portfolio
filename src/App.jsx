import React, { useState, useEffect } from 'react';
import LoadingScreen from './component/LoadingScreen';
import Header from './component/Header';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`main-content ${isLoading ? 'hidden' : 'visible'}`}>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </>
  );
}

export default App
