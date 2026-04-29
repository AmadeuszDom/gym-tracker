import { useState } from "react";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import WorkoutsSection from "./Components/Workouts/WorkoutsSection";

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

function Workouts() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutData[]>(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("workouts") : null;
    return stored ? JSON.parse(stored) : [];
  });

  const refreshWorkouts = () => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("workouts") : null;
    setWorkouts(stored ? JSON.parse(stored) : []);
  };

  const handleWorkoutUpdate = (updatedWorkout: WorkoutData) => {
    const updatedWorkouts = workouts.map((workout) =>
      workout.planName === updatedWorkout.planName &&
      workout.date === updatedWorkout.date
        ? updatedWorkout
        : workout,
    );
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  const handleWorkoutDelete = (deletedWorkout: WorkoutData) => {
    const updatedWorkouts = workouts.filter(
      (workout) =>
        !(
          workout.planName === deletedWorkout.planName &&
          workout.date === deletedWorkout.date
        ),
    );
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <Navbar onMenuToggle={() => setIsSideBarOpen(!isSideBarOpen)}></Navbar>
      <div className="flex flex-1 w-full">
        <Sidebar isActive={isSideBarOpen} onWorkoutCreated={refreshWorkouts} />
        <WorkoutsSection
          workouts={workouts}
          onWorkoutUpdate={handleWorkoutUpdate}
          onWorkoutDelete={handleWorkoutDelete}
        />
      </div>
    </div>
  );
}

export default Workouts;
