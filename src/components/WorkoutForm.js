// src/components/WorkoutForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const WorkoutForm = () => {
  const [day, setDay] = useState('Day 1');
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const addWorkout = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'workouts'), {
      day,
      exercise,
      sets,
      reps,
      weight,
    });
    setDay('Day 1');
    setExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <form onSubmit={addWorkout}>
      <label htmlFor="day">Day:</label>
      <select id="day" value={day} onChange={(e) => setDay(e.target.value)} required>
        <option value="Day 1">Day 1</option>
        <option value="Day 2">Day 2</option>
        <option value="Day 3">Day 3</option>
        <option value="Day 4">Day 4</option>
        <option value="Day 5">Day 5</option>
        <option value="Day 6">Day 6</option>
      </select>
      <label htmlFor="exercise">Exercise:</label>
      <input type="text" id="exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} required />
      <label htmlFor="sets">Sets:</label>
      <input type="number" id="sets" value={sets} onChange={(e) => setSets(e.target.value)} required />
      <label htmlFor="reps">Reps:</label>
      <input type="number" id="reps" value={reps} onChange={(e) => setReps(e.target.value)} required />
      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default WorkoutForm;
