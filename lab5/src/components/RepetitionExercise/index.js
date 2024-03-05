import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    // Prevent decrementing below 0
    setCounter(Math.max(0, counter - 1));
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="exercise-container">
      {/* Display exercise name and counter */}
      <p className="exercise-name">{name}: {counter}</p>

      {/* Increment, decrement, and reset buttons */}
      <button onClick={handleIncrement} className="exercise-button">+</button>
      <button onClick={handleDecrement} className="exercise-button">-</button>
      <button onClick={handleReset} className="exercise-button">Reset</button>
    </div>
  );
};

export default RepetitionExercise;
