import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import WorkoutsSection from "./Components/Workouts/WorkoutsSection";
import { useWorkouts } from "./contexts/WorkoutsContext"; // context hook

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
  const { workouts, setWorkouts } = useWorkouts(); // state from context

  // Refresh from localStorage – used when Sidebar adds a new workout directly
  const refreshWorkouts = () => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("workouts") : null;
    setWorkouts(stored ? JSON.parse(stored) : []);
  };

  const handleWorkoutUpdate = (updatedWorkout: WorkoutData) => {
    setWorkouts((prev) =>
      prev.map((w) =>
        w.planName === updatedWorkout.planName && w.date === updatedWorkout.date
          ? updatedWorkout
          : w,
      ),
    );
  };

  const handleWorkoutDelete = (deletedWorkout: WorkoutData) => {
    setWorkouts((prev) =>
      prev.filter(
        (w) => !(w.planName === deletedWorkout.planName && w.date === deletedWorkout.date),
      ),
    );
    // No extra refresh – UI updates via context state change
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar onMenuToggle={() => setIsSideBarOpen(!isSideBarOpen)} />
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
