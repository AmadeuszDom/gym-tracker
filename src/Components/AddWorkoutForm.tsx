import { useState } from "react";

interface Props {
  onClose?: () => void;
}

interface ExerciseItem {
  name: string;
  sets: number;
  reps: number;
}

interface WorkoutPlanFormData {
  planName: string;
  description: string;
  daysPerWeek: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  targetMuscleGroups: string[];
  startDate: string;
  exercises: ExerciseItem[];
}

function AddWorkoutForm({ onClose }: Props) {
  const workoutPlans: WorkoutPlanFormData[] = localStorage.getItem(
    "workoutPlans",
  )
    ? JSON.parse(localStorage.getItem("workoutPlans")!)
    : [];

  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlanFormData>({
    planName: "",
    description: "",
    daysPerWeek: 3,
    difficulty: "beginner",
    targetMuscleGroups: [],
    startDate: new Date().toISOString().split("T")[0],
    exercises: [],
  });

  const handlePlanChange = (plan: WorkoutPlanFormData) => {
    setSelectedPlan(plan);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#16161F] border border-[#2a2a3a] rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#E4E4E7]">Add Workout</h2>
          <button
            onClick={onClose}
            className="text-[#8888A0] hover:text-[#E4E4E7] transition text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>
        {/* Choose Workout Plan */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-[#8888A0]">Choose Workout Plan</label>
          <select
            value={selectedPlan.planName}
            onChange={(e) => {
              const plan = workoutPlans.find(
                (p) => p.planName === e.target.value,
              );
              if (plan) handlePlanChange(plan);
            }}
            className="bg-[#2a2a3a] text-[#E4E4E7] p-3 rounded-lg focus:outline-none"
          >
            <option disabled>
              {workoutPlans.length === 0
                ? "No workout plans available"
                : "Select a plan"}
            </option>
            {workoutPlans.map((plan, index) => (
              <option key={index} value={plan.planName}>
                {plan.planName}
              </option>
            ))}
          </select>
        </div>

        {/* Plan Details */}
        <div className="mt-4 p-2.5 bg-[#2a2a3a] rounded-lg text-sm text-[#E4E4E7]">
          {selectedPlan.planName == "" ? (
            <p>No plan selected</p>
          ) : (
            <div className="flex flex-col gap-2">
              {" "}
              <p className="font-bold">
                Plan selected:{" "}
                <span className="bg-linear-to-r from-[#E8793B] to-[#F4A261] text-transparent bg-clip-text">
                  {" "}
                  {selectedPlan.planName}
                </span>
              </p>
              {/* Exercises List*/}
              <div className="flex flex-col">
                <h3 className="font-medium text-[#E4E4E7]">Exercises: </h3>
                {selectedPlan.exercises.map((exercise, index) => (
                  <div key={index} className="flex gap-1.5">
                    {exercise.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddWorkoutForm;
