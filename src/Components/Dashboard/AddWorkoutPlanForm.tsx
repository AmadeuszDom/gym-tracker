import { useState } from "react";

interface ExerciseItem {
  name: string;
  sets: number;
  reps: number;
  weight: number;
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

interface AddWorkoutPlanFormProps {
  onClose: () => void;
  onSubmit: (data: WorkoutPlanFormData) => void;
}

interface FormErrors {
  planName?: string;
  targetMuscleGroups?: string;
  exercises?: string;
}

interface ExerciseErrors {
  name?: string;
  sets?: string;
  reps?: string;
  weight?: string;
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
    exercises: [],
  });

  const [exerciseData, setExerciseData] = useState<ExerciseItem>({
    name: "",
    sets: 1,
    reps: 1,
    weight: 1,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [exerciseError, setExerciseError] = useState<ExerciseErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.planName.trim()) {
      newErrors.planName = "Plan name is required";
    } else if (formData.planName.length < 3) {
      newErrors.planName = "Plan name must be at least 3 characters";
    }

    if (formData.targetMuscleGroups.length === 0) {
      newErrors.targetMuscleGroups = "Select at least one muscle group";
    }

    if (formData.exercises.length === 0) {
      newErrors.exercises = "Add at least one exercise";
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

  const validateExercise = (): boolean => {
    const exerciseErrors: ExerciseErrors = {};

    if (!exerciseData.name.trim()) {
      exerciseErrors.name = "Exercise name is required.";
    }

    if (exerciseData.sets < 1) {
      exerciseErrors.sets = "Sets must be at least 1.";
    }

    if (exerciseData.reps < 1) {
      exerciseErrors.reps = "Reps must be at least 1.";
    }
    if (exerciseData.weight < 1) {
      exerciseError.weight = "Weight must be at least 1.";
    }

    setExerciseError(exerciseErrors);
    return Object.keys(exerciseErrors).length === 0;
  };

  const handleAddExercise = () => {
    if (!validateExercise()) return;

    setFormData((prev) => ({
      ...prev,
      exercises: [...prev.exercises, exerciseData],
    }));

    setExerciseData((prev) => ({
      name: "",
      sets: prev.sets,
      reps: prev.reps,
      weight: prev.weight,
    }));

    setExerciseError({});
    setErrors((prev) => ({ ...prev, exercises: undefined }));
  };

  const handleRemoveExercise = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      exercises: prev.exercises.filter((_, i) => i !== index),
    }));
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
            className="text-[#8888A0] hover:text-[#E4E4E7] transition text-2xl cursor-pointer"
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
            <div className="grid grid-cols-3 gap-2">
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
                {errors.targetMuscleGroups}
              </p>
            )}
          </div>

          {/* Exercises */}
          <div>
            <label className="block text-md font-bold text-[#E4E4E7] mb-2">
              Exercises <span className="text-[#E8793B]">*</span>
            </label>
            <div className="grid gap-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Name <span className="text-[#E8793B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={exerciseData.name}
                    onChange={(e) =>
                      setExerciseData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Enter exercise name"
                    className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] focus:border-[#E8793B] focus:outline-none transition"
                  />
                  {exerciseError.name && (
                    <p className="text-[#E8793B] text-xs mt-2">
                      {exerciseError.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Sets <span className="text-[#E8793B]">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) =>
                      setExerciseData((prev) => ({
                        ...prev,
                        sets: Number(e.target.value) || 1,
                      }))
                    }
                    className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] focus:border-[#E8793B] focus:outline-none transition"
                    placeholder="1"
                  />
                  {exerciseError.sets && (
                    <p className="text-[#E8793B] text-xs mt-2">
                      {exerciseError.sets}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Reps <span className="text-[#E8793B]">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) =>
                      setExerciseData((prev) => ({
                        ...prev,
                        reps: Number(e.target.value) || 1,
                      }))
                    }
                    placeholder="1"
                    className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] focus:border-[#E8793B] focus:outline-none transition"
                  />
                  {exerciseError.reps && (
                    <p className="text-[#E8793B] text-xs mt-2">
                      {exerciseError.reps}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#E4E4E7] mb-2">
                    Weight (kg) <span className="text-[#E8793B]">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) =>
                      setExerciseData((prev) => ({
                        ...prev,
                        weight: Number(e.target.value) || 1,
                      }))
                    }
                    className="w-full px-4 py-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] focus:border-[#E8793B] focus:outline-none transition"
                    placeholder="1"
                  />
                  {exerciseError.weight && (
                    <p className="text-[#E8793B] text-xs mt-2">
                      {exerciseError.weight}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleAddExercise}
                  className="bg-[#4ADE80]/70 hover:bg-[#4ADE80]/90 text-[#E4E4E7] border border-[#2a2a3a] px-3 py-2 rounded-lg transition font-medium cursor-pointer"
                >
                  Add exercise
                </button>
                {errors.exercises && (
                  <p className="text-[#E8793B] text-xs">{errors.exercises}</p>
                )}
              </div>
            </div>
          </div>

          {/* Exercise List */}
          <div className="grid gap-3">
            {formData.exercises.map((exercise, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleRemoveExercise(index)}
                className="text-left bg-[#1e1e2e] border border-[#2a2a3a] rounded-xl p-3 hover:border-[#E8793B] transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[#E4E4E7] font-medium">
                      {exercise.name}
                    </p>
                    <p className="text-[#8888A0] text-xs">Click to remove</p>
                  </div>
                  <div className="text-[#E4E4E7] text-sm">
                    {exercise.sets}x{exercise.reps}
                  </div>
                </div>
              </button>
            ))}
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
              className="flex-1 py-2 px-4 bg-[#1e1e2e] text-[#E4E4E7] border border-[#2a2a3a] rounded-lg hover:border-[#8888A0] hover:bg-[#505070]/40 transition font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-[#E8793B] text-[#111119] rounded-lg hover:bg-[#F4A261] transition font-medium cursor-pointer"
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
