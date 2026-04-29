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
  onClose?: () => void;
  workout: WorkoutData | null;
}

interface ExerciseErrors {
  name?: string;
  sets?: string;
  reps?: string;
}

function EditWorkout({ onClose, workout }: Props) {
  const [workouts, setWorkouts] = useState<WorkoutData[]>([]);
  const [exerciseError, setExerciseError] = useState<ExerciseErrors>({});
  const [exerciseData, setExerciseData] = useState<ExerciseItem>({
    name: "",
    sets: 0,
    reps: 0,
  });

  // Load workouts from localStorage on mount
  useEffect(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
    }
  }, []);

  const validateWorkout = (): boolean => {
    const exerciseErrors: ExerciseErrors = {};

    if (!exerciseData.name.trim()) {
      exerciseErrors.name = "Exercise name is required.";
    }
    if (exerciseData.sets <= 0) {
      exerciseErrors.sets = "Number of sets must be a positive integer.";
    }
    if (exerciseData.reps <= 0) {
      exerciseErrors.reps = "Number of reps must be a positive integer.";
    }
    setExerciseError(exerciseErrors);
    return Object.keys(exerciseErrors).length === 0;
  };

  const handleChangeName = (eName: string) => {
    setExerciseData((prev) => ({ ...prev, name: eName }));
  };

  const handleChangeSets = (eSets: number) => {
    setExerciseData((prev) => ({ ...prev, sets: eSets }));
  };
  const handleChangeReps = (eReps: number) => {
    setExerciseData((prev) => ({ ...prev, reps: eReps }));
  };

  const updateWorkout = (workout: WorkoutData) => {
    workout.exercises = exerciseData
      ? [...workout.exercises, exerciseData]
      : workout.exercises;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateWorkout()) {
      return;
    }
    updateWorkout(workout!);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    setExerciseError({});
    setExerciseData({ name: "", sets: 0, reps: 0 });
    onClose && onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#16161F] border border-[#2a2a3a] rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white/90">Edit Workout</h2>
            <button
              onClick={onClose}
              className="text-[#8888A0] hover:text-[#E4E4E7] transition text-2xl cursor-pointer"
            >
              x
            </button>
          </div>

          {/* Workout plan */}
          <div className="flex flex-col border-b-2 border-[#2a2a3a]">
            <h3 className="text-xl font-medium text-white/85 mb-2">
              {workout?.planName}
            </h3>
          </div>

          {/* Edit exercises*/}
          <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
            <div className="flex justify-between px-1 text-[#8888A0]">
              <h4>Exercise</h4>
              <h4>Sets</h4>
              <h4>Reps</h4>
            </div>
            {workout?.exercises.map((exercise, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-1.5"
              >
                <input
                  type="text"
                  defaultValue={exercise.name}
                  className="rounded-2xl bg-[#2a2a3a] p-1 w-full text-center"
                  onChange={(e) => handleChangeName(e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  name=""
                  defaultValue={exercise.sets}
                  className="rounded-2xl bg-[#2a2a3a] p-1 w-full text-center"
                  onChange={(e) => handleChangeSets(parseInt(e.target.value))}
                />
                <input
                  type="number"
                  min="0"
                  name=""
                  defaultValue={exercise.reps}
                  className="rounded-2xl bg-[#2a2a3a] p-1 w-full text-center"
                  onChange={(e) => handleChangeReps(parseInt(e.target.value))}
                />
              </div>
            ))}

            {/* Buttons */}
            <div className="flex items-end mt-5 gap-3 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 bg-[#1e1e2e] text-[#E4E4E7] border border-[#2a2a3a] rounded-lg hover:border-[#8888A0] hover:bg-[#505070]/40 transition font-medium cursor-pointer"
              >
                Cancel
              </button>

              <button className="py-2 px-4  bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg hover:border-[#8888A0] hover:bg-[#505070]/40 transition font-medium cursor-pointer">
                <p className="bg-[#4ADE80]/90  text-transparent bg-clip-text">
                  Save Workout
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditWorkout;
