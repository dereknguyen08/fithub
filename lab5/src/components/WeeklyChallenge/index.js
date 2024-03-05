import React, { useState, useEffect } from 'react';

const WeeklyChallenge = () => {
  const [showChallengeInfo, setShowChallengeInfo] = useState(false);
  const [showParticipateInfo, setShowParticipateInfo] = useState(false);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [repetitionCount, setRepetitionCount] = useState(0);
  const [fakeHeartRate, setFakeHeartRate] = useState(0);
  const [shareClicked, setShareClicked] = useState(false);
  const [saveClicked, setSaveClicked] = useState(false);

  const currentChallenge = {
    exercise: 'Planks',
    target: 'Hold a plank for a total of 120 seconds this week',
    buttonText: 'Participate',
  };

  const handleWeeklyChallengeClick = () => {
    setShowChallengeInfo(!showChallengeInfo);
  };

  const handleParticipateClick = () => {
    setShowParticipateInfo(!showParticipateInfo);
  };

  const handleStopwatchClick = () => {
    if (!stopwatchRunning) {
      setStopwatchRunning(true);
      const startTime = Date.now() - stopwatchTime * 1000; // Calculate start time based on previous time
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        setStopwatchTime(Math.floor(elapsedTime));
      }, 1000);

      // Stop the stopwatch after 10 seconds (for demonstration)
      setTimeout(() => {
        clearInterval(interval);
        setStopwatchRunning(false);
      }, 10000);
    }
  };

  const handleResetClick = () => {
    setStopwatchTime(0);
  };

  const handlePauseClick = () => {
    setStopwatchRunning(false);
  };

  const handleRepetitionClick = () => {
    setRepetitionCount(prevCount => prevCount + 1);
  };

  const handleFakeHeartRateClick = () => {
    // Generate a random heart rate between 60 and 100
    const heartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    setFakeHeartRate(heartRate);
  };

  const handleShareClick = () => {
    setShareClicked(true);
  };

  const handleSaveClick = () => {
    setSaveClicked(true);
  };

  useEffect(() => {
    if (shareClicked || saveClicked) {
      // Simulate closing share/save options after 3 seconds
      setTimeout(() => {
        setShareClicked(false);
        setSaveClicked(false);
      }, 3000);
    }
  }, [shareClicked, saveClicked]);

  return (
    <div className="weekly-challenge">
      {!showChallengeInfo ? (
        <button className="weekly-challenge-button" onClick={handleWeeklyChallengeClick}>
          Weekly Challenge
        </button>
      ) : (
        <div className="challenge-info">
          <h3>Weekly Challenge</h3>
          <p>This week's challenge: {currentChallenge.exercise}</p>
          <p>{currentChallenge.target}</p>
          {!showParticipateInfo ? (
            <button className="participate-button" onClick={handleParticipateClick}>
              {currentChallenge.buttonText}
            </button>
          ) : (
            <div className="participate-info">
              <button className="feature-button" onClick={handleStopwatchClick}>
                Stopwatch
              </button>
              {stopwatchRunning && (
                <>
                  <button className="feature-button" onClick={handleResetClick}>
                    Reset
                  </button>
                  <button className="feature-button" onClick={handlePauseClick}>
                    Pause
                  </button>
                </>
              )}
              <button className="feature-button" onClick={handleRepetitionClick}>
                Repetition
              </button>
              <button className="feature-button" onClick={handleFakeHeartRateClick}>
                Heart Rate
              </button>
              <button className="feature-button" onClick={handleShareClick}>
                Share
              </button>
              <button className="feature-button" onClick={handleSaveClick}>
                Save
              </button>
            </div>
          )}
        </div>
      )}
      {stopwatchRunning && (
        <div>
          <p>Stopwatch Time: {stopwatchTime} seconds</p>
        </div>
      )}
      {repetitionCount > 0 && (
        <div>
          <p>Repetition Count: {repetitionCount}</p>
        </div>
      )}
      {fakeHeartRate > 0 && (
        <div>
          <p>Heart Rate: {fakeHeartRate} bpm</p>
        </div>
      )}
      {shareClicked && (
        <div>
          <p>Shared successfully!</p>
        </div>
      )}
      {saveClicked && (
        <div>
          <p>Saved successfully!</p>
        </div>
      )}
    </div>
  );
};

export default WeeklyChallenge;
