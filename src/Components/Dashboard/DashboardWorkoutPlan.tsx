interface WorkoutPlanData {
  planName: string;
  description: string;
  daysPerWeek: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  targetMuscleGroups: string[];
  startDate: string;
}

interface DashboardWorkoutPlanProps {
  workoutPlan: WorkoutPlanData;
  onClick?: () => void;
}

function DashboardWorkoutPlan({
  workoutPlan,
  onClick,
}: DashboardWorkoutPlanProps) {
  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "Początkujący";
      case "intermediate":
        return "Średniozaawansowany";
      case "advanced":
        return "Zaawansowany";
      default:
        return difficulty;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "text-[#4ADE80] bg-[#4ADE80]/10";
      case "intermediate":
        return "text-[#E8793B] bg-[#E8793B]/10";
      case "advanced":
        return "text-[#EF4444] bg-[#EF4444]/10";
      default:
        return "text-[#8888A0] bg-[#8888A0]/10";
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-[#2a2a3a]/40 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white hover:bg-[#2a2a3a]/60"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-[#E4E4E7] truncate">
            {workoutPlan.planName}
          </h3>
          <span className="text-[#8888A0] text-sm">›</span>
        </div>

        {/* Description */}
        {workoutPlan.description && (
          <p className="text-sm text-[#8888A0] line-clamp-2">
            {workoutPlan.description}
          </p>
        )}

        {/* Details */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#E4E4E7]">
            {workoutPlan.daysPerWeek} dni/tyg
          </span>
          <span className="text-[#8888A0]">•</span>
          <span
            className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(workoutPlan.difficulty)}`}
          >
            {getDifficultyText(workoutPlan.difficulty)}
          </span>
        </div>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workoutPlan.targetMuscleGroups.slice(0, 4).map((group) => (
            <span
              key={group}
              className="px-3 py-1 text-xs font-medium text-[#E4E4E7] bg-[#1e1e2e] border border-[#2a2a3a] rounded-xl"
            >
              {group}
            </span>
          ))}
          {workoutPlan.targetMuscleGroups.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-[#8888A0] bg-[#1e1e2e] border border-[#2a2a3a] rounded-xl">
              +{workoutPlan.targetMuscleGroups.length - 4}
            </span>
          )}
        </div>

        {/* Start Date */}
        <div className="text-xs text-[#6a6a70]">
          Rozpoczęto:{" "}
          {new Date(workoutPlan.startDate).toLocaleDateString("pl-PL")}
        </div>
      </div>
    </div>
  );
}

export default DashboardWorkoutPlan;
