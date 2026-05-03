import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

/** Types used throughout the app */
export interface ExerciseItem {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface WorkoutData {
  planName: string;
  date: string; // ISO string expected
  exercises: ExerciseItem[];
}

interface WorkoutsContextProps {
  workouts: WorkoutData[];
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutData[]>>;
}

const WorkoutsContext = createContext<WorkoutsContextProps | undefined>(
  undefined,
);

export const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [workouts, setWorkouts] = useState<WorkoutData[]>(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("workouts") : null;
    return stored ? JSON.parse(stored) : [];
  });

  // Keep localStorage in sync whenever workouts change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  return (
    <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

/** Hook for consuming the workouts state */
export const useWorkouts = () => {
  const ctx = useContext(WorkoutsContext);
  if (!ctx) {
    throw new Error("useWorkouts must be used within a WorkoutsProvider");
  }
  return ctx;
};
