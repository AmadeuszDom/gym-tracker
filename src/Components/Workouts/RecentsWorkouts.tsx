import React, { useState, useEffect } from "react";
import EditWorkout from "./EditWorkout";

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

function RecentWorkouts() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutData | null>(
    null,
  );

  const [isEditingVisible, setIsEditingVisible] = useState(false);

  // Initialise workouts from localStorage and stay synced via the storage event
  const [workouts, setWorkouts] = useState<WorkoutData[]>(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("workouts") : null;
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "workouts") {
        const stored =
          typeof window !== "undefined"
            ? localStorage.getItem("workouts")
            : null;
        setWorkouts(stored ? JSON.parse(stored) : []);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  // Compute recent workouts from state
  const recent = workouts.slice().reverse().slice(0, 5);

  const handleWorkoutDelete = (w: WorkoutData) => {
    const updatedWorkouts = workouts.filter((workout) => workout !== w);
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  const handleWorkoutSelect = (w: WorkoutData) => {
    setSelectedWorkout(w);
    setIsEditingVisible(true);
  };

  const handleEditClose = () => {
    setSelectedWorkout(null);
    setIsEditingVisible(false);
  };

  return (
    <>
      <div className="p-4 bg-[#111119] text-[#E4E4E7] flex gap-6 justify-between">
        <h2 className="text-2xl font-medium">Recent Workouts</h2>
        <p>History</p>
      </div>
      <div className="flex flex-wrap gap-6 p-4 items-start">
        {recent.length === 0 ? (
          <p className="text-[#8888A0]">No workouts yet. Start training!</p>
        ) : (
          recent.map((workout: WorkoutData, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-2 bg-[#16161F] border border-[#2a2a3a] rounded-2xl p-4 max-w-md"
            >
              <h3 className="text-lg font-semibold text-[#E4E4E7] text-center">
                {workout.planName}
              </h3>

              {/*Exercises */}

              <div className="flex p-2 flex-wrap justify-center">
                {workout.exercises.map((exercise) => (
                  <div
                    className="flex flex-col gap-1.5 border-2 border-[#2a2a3a] p-2 m-1 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white hover:bg-[#2a2a3a]/70 hover:rotate-3"
                    key={exercise.name}
                  >
                    <h4 className="text-md font-medium text-[#E4E4E7]">
                      {exercise.name}
                    </h4>
                    <p className="text-[#8888A0]">
                      {exercise.sets} sets of {exercise.reps} reps
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <p className="text-[#E4E4E7] self-end-safe">{workout.date}</p>

                {/*Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleWorkoutSelect(workout)}
                    className="px-3 py-1.5 bg-[#2a2a3a] text-[#E4E4E7] border border-[#3a3a4a] rounded-md hover:bg-[#3a3a4a] hover:text-[#E8793B] transition font-medium cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    className="px-3 py-1.5 text-[#E4E4E7] bg-[#2a2a3a] border border-[#3a3a4a] rounded-md hover:text-[#EF4444]/90 transition font-medium cursor-pointer"
                    onClick={() => handleWorkoutDelete(workout)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {isEditingVisible && (
          <EditWorkout
            onClose={handleEditClose}
            workout={selectedWorkout || null}
          />
        )}
      </div>
    </>
  );
}

export default RecentWorkouts;
