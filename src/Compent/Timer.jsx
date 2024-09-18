// TimerComponent.jsx
import React, { useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Timer state to track time
  const [isRunning, setIsRunning] = useState(false); // To check if timer is running
  const [intervalId, setIntervalId] = useState(null); // To store interval ID for clearing later

  const handleStart = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Increment time every second
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId); // Stop the timer
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalId); // Stop and reset the timer
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-5xl font-bold mb-8">{time}s</div>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
