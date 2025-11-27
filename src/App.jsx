import React, { useState, useEffect, useRef } from 'react';
import IntroSection from './components/IntroSection.jsx';
import CandleSection from './components/CandleSection.jsx';
import StorySection from './components/StorySection.jsx';
import WishSection from './components/WishSection.jsx';
import './App.css';
import { bgAudio } from './assets/sounds/index.js';
import parts from './utils/parts.js';
import bgImage from './assets/img/bg.gif'



const App = () => {
  const [currentSection, setCurrentSection] = useState('intro');
  const [currentStoryPart, setCurrentStoryPart] = useState(0);
  const [candlesLit, setCandlesLit] = useState(false);

  const startCelebration = () => {
    bgAudio.pause();
    bgAudio.currentTime = 0;
    bgAudio.loop = true;
    bgAudio.play();
    setCurrentSection('candleSection');
  };

  const lightCandlesCallBack = () => {
    setCandlesLit(true);
    setTimeout(() => {
      setCurrentSection('storySection');
    }, 3000);
  };

  const nextStoryPart = () => {
    if (currentStoryPart < parts.length - 1) {
      setCurrentStoryPart(currentStoryPart + 1);
    } else {
      setCurrentSection('wishSection');
    }
  };

  const prevStoryPart = () => {
    if (currentStoryPart > 0) {
      setCurrentStoryPart(currentStoryPart - 1);
    }
  };

  const restartCelebration = () => {
    setCurrentSection('intro');
    setCurrentStoryPart(0);
    setCandlesLit(false);
  };


  const containerRef = useRef(null);


  const handleEvent = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {

    window.addEventListener("scrollToTop", handleEvent);

    return () => {
    };

  }, [])

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div className="container" ref={containerRef}>
        <h1 className="flicker font-creepster"> Happy Birthday... If You Dare </h1>



        {currentSection === 'intro' && (
          <IntroSection onStart={startCelebration} />
        )}

        {currentSection === 'candleSection' && (
          <CandleSection
            candlesLit={candlesLit}
            callback={lightCandlesCallBack}
          />
        )}

        {currentSection === 'storySection' && (
          <StorySection
            currentPart={currentStoryPart}
            onNext={nextStoryPart}

            onPrev={prevStoryPart}
          />
        )}

        {currentSection === 'wishSection' && (
          <WishSection onRestart={restartCelebration} />
        )}
      </div>
    </div>
  );
};

export default App;