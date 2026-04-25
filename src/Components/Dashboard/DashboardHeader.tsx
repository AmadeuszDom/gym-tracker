import { useState } from "react";
import Icon from "../../../public/Icons";
import AddWorkoutPlanForm from "./AddWorkoutPlanForm";
import DashboardWorkoutPlan from "./DashboardWorkoutPlan";

interface Props {
  username?: string;
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

function DashboardHeader({ username }: Props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlanFormData[]>([]);

  const handleFormSubmit = (data: WorkoutPlanFormData) => {
    setWorkoutPlans((prev) => [...prev, data]);
    console.log("New workout plan created:", data);
    // TODO: Send to backend/API
  };

  const handleWorkoutPlanClick = (plan: WorkoutPlanFormData) => {
    console.log("Workout plan clicked:", plan);
    // TODO: Navigate to workout plan details
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="font-bold flex-col py-1 px-2 rounded-lg text-2xl">
          Plany{" "}
          <span className="bg-linear-to-r from-[#E8793B] to-[#F4A261] text-transparent bg-clip-text">
            {username}
          </span>
        </h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-[#2a2a3a] p-2 rounded-xl border-black border hover:text-white hover:bg-[#505070] hover:scale-110 focus:scale-110 transition duration-500 ease-in-out"
        >
          {Icon.addPlus}
        </button>
      </header>

      {/* Workout Plans Grid */}
      {workoutPlans.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workoutPlans.map((plan, index) => (
            <DashboardWorkoutPlan
              key={index}
              workoutPlan={plan}
              onClick={() => handleWorkoutPlanClick(plan)}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {workoutPlans.length === 0 && (
        <div className="text-center py-12">
          <div className="text-[#8888A0] text-lg mb-2">
            Brak planów treningowych
          </div>
          <div className="text-[#6a6a70] text-sm">
            Kliknij przycisk "+" aby dodać pierwszy plan
          </div>
        </div>
      )}

      {isFormOpen && (
        <AddWorkoutPlanForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default DashboardHeader;
