// src/App.js
import React from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Workout Tracker</h1>
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
};

export default App;
