import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name }) => {
  const [elapsedTime, setElapsedTime] = useState(0); // In milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10); // Update every 10 milliseconds
      }, 10);
    }

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false); // Stop the timer when resetting
  };

  // Format elapsed time with leading zeros (e.g., 00:01:23.456)
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const mins = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const millisecs = Math.floor((milliseconds % 1000) / 10); // Get milliseconds (divide by 10 to remove the last 2 digits)
    return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}.${millisecs < 10 ? '0' : ''}${millisecs}`;
  };

  return (
    <div className="exercise-container">
      {/* Display exercise name and formatted time */}
      <p className="exercise-name">{name}: {formatTime(elapsedTime)}</p>

      {/* Start, stop, and reset buttons */}
      <button onClick={handleStart} className="exercise-button">Start</button>
      <button onClick={handleStop} className="exercise-button">Stop</button>
      <button onClick={handleReset} className="exercise-button">Reset</button>
    </div>
  );
};

export default DurationExercise;
