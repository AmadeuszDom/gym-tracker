import React, { useState, useEffect } from "react";

interface ExerciseItem {
  name: string;
  sets: number;
  reps: number;
}

interface WorkoutData {
  planName: string;
  date: string;
  exercises: ExerciseItem[];
}

interface Props {
  onEdit?: (workout: WorkoutData) => void;
  onClose?: () => void;
}

function EditWorkout({ onEdit, onClose }: Props) {
  const [workouts, setWorkouts] = useState<WorkoutData[]>([]);

  // Load workouts from localStorage on mount
  return 0;
}

export default EditWorkout;
