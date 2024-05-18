// src/components/WorkoutList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'workouts'), (snapshot) => {
      const workoutData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWorkouts(workoutData);
    });

    return () => unsubscribe();
  }, []);

  const deleteWorkout = async (id) => {
    await deleteDoc(doc(db, 'workouts', id));
  };

  return (
    <ul>
      {workouts.map((workout) => (
        <li key={workout.id}>
          <strong>{workout.day}:</strong> {workout.exercise} - {workout.sets} sets of {workout.reps} reps @ {workout.weight}kg
          <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
