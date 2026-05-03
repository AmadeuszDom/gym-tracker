import WorkoutsHeader from "./WorkoutsHeader";
import WorkoutsCalendar from "./WorkoutsCalendar";
import RecentWorkouts from "./RecentsWorkouts";

import type { WorkoutData } from "../../contexts/WorkoutsContext";

interface WorkoutsSectionProps {
  workouts: WorkoutData[];
  onWorkoutUpdate: (updatedWorkout: WorkoutData) => void;
  onWorkoutDelete: (deletedWorkout: WorkoutData) => void;
}

function WorkoutsSection({
  workouts,
  onWorkoutUpdate,
  onWorkoutDelete,
}: WorkoutsSectionProps) {
  return (
    <section className="flex-1 p-4 bg-[#111119] text-[#E4E4E7] flex flex-col gap-6">
      <WorkoutsHeader username="Tomasz" />
      <WorkoutsCalendar />
      <RecentWorkouts
        workouts={workouts}
        onWorkoutUpdate={onWorkoutUpdate}
        onWorkoutDelete={onWorkoutDelete}
      />
    </section>
  );
}

export default WorkoutsSection;
