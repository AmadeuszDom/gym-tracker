import { useState } from "react";
import Icon from "../../../public/Icons";

interface WorkoutPlanFormData {
  planName: string;
  description: string;
  daysPerWeek: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  targetMuscleGroups: string[];
  startDate: string;
}

interface AddWorkoutPlanFormProps {
  onClose: () => void;
  onSubmit: (data: WorkoutPlanFormData) => void;
}

const muscleGroups = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Forearms",
  "Legs",
  "Calves",
  "Core",
];

function AddWorkoutPlanForm({ onClose, onSubmit }: AddWorkoutPlanFormProps) {
  const [formData, setFormData] = useState<WorkoutPlanFormData>({
    planName: "",
    description: "",
    daysPerWeek: 3,
    difficulty: "intermediate",
    targetMuscleGroups: [],
    startDate: new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = useState<Partial<WorkoutPlanFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<WorkoutPlanFormData> = {};

    if (!formData.planName.trim()) {
      newErrors.planName = "Plan name is required";
    }
    if (formData.planName.length < 3) {
      newErrors.planName = "Plan name must be at least 3 characters";
    }
    if (formData.targetMuscleGroups.length === 0) {
      newErrors.targetMuscleGroups = ["Select at least one muscle group"];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      onClose();
    }
  };

  const handleMuscleGroupChange = (group: string) => {
    setFormData((prev) => ({
      ...prev,
      targetMuscleGroups: prev.targetMuscleGroups.includes(group)
        ? prev.targetMuscleGroups.filter((g) => g !== group)
        : [...prev.targetMuscleGroups, group],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#16161F] border border-[#2a2a3a] rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#E4E4E7]">
            Add Workout Plan
          </h2>
          <button
            onClick={onClose}
            className="text-[#8888A0] hover:text-[#E4E4E7] transition text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Plan Name */}
          <div>
            <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
              Plan Name <span className="text-[#E8793B]">*</span>
            </label>
            <input
              type="text"
              value={formData.planName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, planName: e.target.value }))
              }
              className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] placeholder-[#8888A0] focus:border-[#E8793B] focus:outline-none transition"
              placeholder="e.g., Upper Body Split"
            />
            {errors.planName && (
              <p className="text-[#E8793B] text-xs mt-1">
                {errors.planName as string}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] placeholder-[#8888A0] focus:border-[#E8793B] focus:outline-none transition resize-none"
              placeholder="Describe your workout plan..."
              rows={3}
            />
          </div>

          {/* Days Per Week */}
          <div>
            <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
              Days Per Week <span className="text-[#E8793B]">*</span>
            </label>
            <div className="flex gap-2">
              {[3, 4, 5, 6].map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, daysPerWeek: days }))
                  }
                  className={`flex-1 py-2 px-3 rounded-lg font-medium transition ${
                    formData.daysPerWeek === days
                      ? "bg-linear-to-r from-[#E8793B] to-[#F4A261] text-[#111119]"
                      : "bg-[#1e1e2e] text-[#8888A0] border border-[#2a2a3a] hover:border-[#E8793B]"
                  }`}
                >
                  {days}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
              Difficulty Level <span className="text-[#E8793B]">*</span>
            </label>
            <select
              value={formData.difficulty}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  difficulty: e.target.value as
                    | "beginner"
                    | "intermediate"
                    | "advanced",
                }))
              }
              className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] focus:border-[#E8793B] focus:outline-none transition"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Target Muscle Groups */}
          <div>
            <label className="block text-sm font-medium text-[#E4E4E7] mb-3">
              Target Muscle Groups <span className="text-[#E8793B]">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {muscleGroups.map((group) => (
                <label
                  key={group}
                  className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-[#1e1e2e] transition"
                >
                  <input
                    type="checkbox"
                    checked={formData.targetMuscleGroups.includes(group)}
                    onChange={() => handleMuscleGroupChange(group)}
                    className="w-4 h-4 rounded border-[#2a2a3a] accent-[#E8793B]"
                  />
                  <span className="text-sm text-[#E4E4E7]">{group}</span>
                </label>
              ))}
            </div>
            {errors.targetMuscleGroups && (
              <p className="text-[#E8793B] text-xs mt-2">
                {errors.targetMuscleGroups[0]}
              </p>
            )}
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
              Start Date <span className="text-[#E8793B]">*</span>
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, startDate: e.target.value }))
              }
              className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] focus:border-[#E8793B] focus:outline-none transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 bg-[#1e1e2e] text-[#E4E4E7] border border-[#2a2a3a] rounded-lg hover:border-[#8888A0] transition font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-[#E8793B] text-[#111119] rounded-lg hover:bg-[#F4A261] transition font-medium"
            >
              Create Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWorkoutPlanForm;
