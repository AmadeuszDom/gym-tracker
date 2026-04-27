import Icon from "../../../public/Icons";

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

interface WorkoutPlanDetailsProps {
  wDetails: WorkoutPlanFormData;
  onClose: () => void;
  onRemove: () => void;
}

function WorkoutPlanDetails({
  wDetails,
  onClose,
  onRemove,
}: WorkoutPlanDetailsProps) {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4  ">
      <div className="bg-[#16161F] border border-[#2a2a3a] rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Name and Description */}
        <div className="flex flex-col pt-2 px-2  border-b-2 border-[#E8793B]/20">
          <div className="flex items-center justify-between">
            <h2 className="text-[#E4E4E7] text-lg font-medium mb-1">
              {wDetails.planName}
            </h2>
            <button
              onClick={onClose}
              className="text-[#A1A1AA] hover:text-[#E4E4E7] cursor-pointer transition ease-in-out duration-300"
            >
              x
            </button>
          </div>
          <p className="text-[#A1A1AA] text-md mb-4">{wDetails.description}</p>
        </div>
        {/* Details */}
        <div className="flex flex-col px-2 py-4 mt-2 gap-2 rounded-2xl border border-[#2a2a3a]">
          <p className="text-sm text-[#E4E4E7] mb-2 flex flex-row items-center gap-1">
            Creation Date: {wDetails.startDate} {Icon.calendar}
          </p>
          <div className="text-sm text-[#E4E4E7] mb-2 flex gap-2">
            {wDetails.daysPerWeek} dni/tyg{" "}
            <span className="text-[#8888A0]">•</span>
            <span
              className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(wDetails.difficulty)}`}
            >
              {wDetails.difficulty}
            </span>
          </div>
          {/* Exercises */}
          <div className="flex flex-col mb-2">
            <h3 className="text-[#E4E4E7] text-lg font-medium mb-2">
              Exercises:
            </h3>
            <div className="flex flex-wrap gap-3">
              {wDetails.exercises.slice(0, 10).map((exercise, index) => (
                <span
                  key={index}
                  className="px-1 py-2 text-xs font-medium text-[#E4E4E7] bg-[#04040F] border border-[#2a2a3a] rounded-xl"
                >
                  {exercise.name} - {exercise.sets} sets x {exercise.reps} reps
                </span>
              ))}
              {wDetails.exercises.length > 10 && (
                <span className="px-1 py-2 text-xs font-medium text-[#8888A0] bg-[#04040F] border border-[#2a2a3a] rounded-xl">
                  +{wDetails.exercises.length - 10} more
                </span>
              )}
            </div>
          </div>
          {/* Muscle Groups*/}
          <div className="text-sm text-[#E4E4E7] flex gap-3">
            {wDetails.targetMuscleGroups.slice(0, 4).map((group) => (
              <span
                key={group}
                className="px-2 py-1 text-xs font-medium text-[#8888A0] bg-[#1e1e2e] border border-[#2a2a3a] rounded-xl"
              >
                {group}
              </span>
            ))}
            {wDetails.targetMuscleGroups.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium text-[#8888A0] bg-[#1e1e2e] border border-[#2a2a3a] rounded-xl">
                +{wDetails.targetMuscleGroups.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className=" flex justify-end mt-6">
          {/* Remove Button */}
          <button
            onClick={onRemove}
            className="px-4 py-2 text-[#111119] bg-[#EF4444]/90 hover:bg-[#F87171] rounded-lg transition font-md cursor-pointer mr-3"
          >
            Delete
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#E8793B] text-[#111119] rounded-lg hover:bg-[#F4A261] transition font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlanDetails;
