// App.js
import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import WeeklyChallenge from './components/WeeklyChallenge'; // Import WeeklyChallenge component

const exercises = [
  { name: 'Push-ups', type: 'repetition' },
  { name: 'Jumping Jacks', type: 'repetition' },
  { name: 'Running', type: 'duration' },
  { name: 'Plank', type: 'duration' },
];

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showChallengeOptions, setShowChallengeOptions] = useState(false);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setShowChallengeOptions(false); // Hide challenge options when selecting an exercise
  };

  const handleReturnToMenu = () => {
    setSelectedExercise(null);
    setShowChallengeOptions(false); // Hide challenge options when returning to menu
  };

  const handleWeeklyChallengeClick = () => {
    setSelectedExercise(null); // Reset selected exercise
    setShowChallengeOptions(true); // Show challenge options
  };

  const handleParticipateClick = () => {
    // Handle participation logic here (e.g., display additional options)
    console.log("Participate button clicked");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Menu</h1>
        {selectedExercise ? (
          <div>
            <button onClick={handleReturnToMenu} className="return-button">
              Return to Main Menu
            </button>
            <div>
              {selectedExercise.type === 'repetition' ? (
                <RepetitionExercise name={selectedExercise.name} />
              ) : (
                <DurationExercise name={selectedExercise.name} />
              )}
            </div>
          </div>
        ) : (
          <div>
            {/* Render exercise buttons */}
            {exercises.map((exercise) => (
              <button key={exercise.name} onClick={() => handleExerciseClick(exercise)} className="exercise-button">
                {exercise.name}
              </button>
            ))}
            {/* Render Weekly Challenge button */}
            <WeeklyChallenge onClick={handleWeeklyChallengeClick} />
            {/* Render challenge options if showChallengeOptions is true */}
            {showChallengeOptions && (
              <div className="challenge-options">
                <h3>Participate in Weekly Challenge</h3>
                {/* Additional options can be added here */}
                <button className="participate-button" onClick={handleParticipateClick}>
                  Participate
                </button>
                {/* Additional options */}
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
