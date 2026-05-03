import React, { useState } from "react";

import type { ExerciseItem, WorkoutData } from "../../contexts/WorkoutsContext";

interface Props {
  onClose: () => void;
  onSave: (updatedWorkout: WorkoutData) => void;
  workout: WorkoutData | null;
}

function EditWorkout({ onClose, onSave, workout }: Props) {
  const [editedExercises, setEditedExercises] = useState<ExerciseItem[]>(
    workout?.exercises || [],
  );

  const handleExerciseChange = (
    index: number,
    field: keyof ExerciseItem,
    value: string | number,
  ) => {
    setEditedExercises((prev) =>
      prev.map((ex, i) => (i === index ? { ...ex, [field]: value } : ex)),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updated: WorkoutData = {
      ...workout!,
      exercises: editedExercises,
    };

    onSave(updated);
    onClose();
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
            {editedExercises.map((exercise, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-1.5"
              >
                <input
                  type="text"
                  value={exercise.name}
                  className="rounded-2xl bg-[#2a2a3a] p-1 w-full text-center"
                  onChange={(e) =>
                    handleExerciseChange(index, "name", e.target.value)
                  }
                />
                <input
                  type="number"
                  min="0"
                  value={exercise.sets}
                  className="rounded-2xl bg-[#2a2a3a] p-1 w-full text-center"
                  onChange={(e) =>
                    handleExerciseChange(index, "sets", Number(e.target.value))
                  }
                />
                <input
                  type="number"
                  min="0"
                  value={exercise.reps}
                  className="rounded-2xl bg-[#2a2a3a] p-1 w-full text-center"
                  onChange={(e) =>
                    handleExerciseChange(index, "reps", Number(e.target.value))
                  }
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
