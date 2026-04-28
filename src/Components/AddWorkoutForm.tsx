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

interface WorkoutData {
  planName: string;
  date: string;
  exercises: ExerciseItem[];
}

interface FormErrors {
  plan?: string;
  exercises?: string;
}

interface ExerciseErrors {
  [index: number]: {
    name?: string;
    sets?: string;
    reps?: string;
  };
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
    setErrors({});
  };

  const [errors, setErrors] = useState<FormErrors>({});
  const [exerciseErrors, setExerciseErrors] = useState<ExerciseErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!selectedPlan.planName) {
      newErrors.plan = "Please select a workout plan.";
    }

    if (selectedPlan.exercises.length === 0) {
      newErrors.exercises = "Add at least one exercise.";
    } else {
      const exErrors: ExerciseErrors = {};
      selectedPlan.exercises.forEach((ex, i) => {
        const currentExErrors: {
          name?: string;
          sets?: string;
          reps?: string;
        } = {};

        if (!ex.name.trim()) {
          currentExErrors.name = `Exercise #${i + 1} name is required.`;
        }

        if (ex.sets < 1) {
          currentExErrors.sets = `Exercise #${i + 1} sets must be at least 1.`;
        }

        if (ex.reps < 1) {
          currentExErrors.reps = `Exercise #${i + 1} reps must be at least 1.`;
        }

        if (Object.keys(currentExErrors).length > 0) {
          exErrors[i] = currentExErrors;
        }
      });
      if (Object.keys(exErrors).length > 0) {
        setExerciseErrors(exErrors);
      }
    }

    setErrors(newErrors);
    return (
      Object.keys(newErrors).length === 0 &&
      Object.keys(exerciseErrors).length === 0
    );
  };

  const handleSubmitWorkout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Save workout to localStorage
    const stored = localStorage.getItem("workouts");
    const existing: WorkoutData[] = stored ? JSON.parse(stored) : [];
    const newWorkout: WorkoutData = {
      planName: selectedPlan.planName,
      date: new Date().toISOString().split("T")[0],
      exercises: selectedPlan.exercises,
    };
    existing.push(newWorkout);
    localStorage.setItem("workouts", JSON.stringify(existing));
    // Reset state
    setSelectedPlan({
      planName: "",
      description: "",
      daysPerWeek: 3,
      difficulty: "beginner",
      targetMuscleGroups: [],
      startDate: new Date().toISOString().split("T")[0],
      exercises: [],
    });
    setErrors({});
    setExerciseErrors({});
    if (onClose) onClose();
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
          <label className="text-sm text-[#8888A0]">
            Choose Workout Plan <span className="text-[#E8793B]">*</span>
          </label>
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
            <option>
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
          {errors.plan && (
            <p className="text-[#E8793B] text-xs mt-1">{errors.plan}</p>
          )}
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
              <form onSubmit={handleSubmitWorkout}>
                <div className="flex flex-col w-full">
                  <h3 className="font-medium text-[#E4E4E7] p-1">
                    Exercises: <span className="text-[#E8793B]">*</span>
                  </h3>
                  {selectedPlan.exercises.map((exercise, index) => (
                    <div key={index}>
                      <div className="flex gap-1.5 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg text-[#E4E4E7] p-2 items-center ">
                        <div className="flex  gap-1.5 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg p-2 items-center w-full">
                          <p className="flex-1">{exercise.name}</p>

                          <label className="text-sm text-[#E4E4E7]">
                            Sets:
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={exercise.sets}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setSelectedPlan((prev) => {
                                const newEx = [...prev.exercises];
                                newEx[index] = { ...newEx[index], sets: val };
                                return { ...prev, exercises: newEx };
                              });
                            }}
                            className="flex-1 min-w-0 bg-[#2a2a3a] text-[#E4E4E7] p-1 rounded-lg focus:outline-none"
                          />

                          <label className="text-sm text-[#E4E4E7] ml-2">
                            Reps:
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={exercise.reps}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setSelectedPlan((prev) => {
                                const newEx = [...prev.exercises];
                                newEx[index] = { ...newEx[index], reps: val };
                                return { ...prev, exercises: newEx };
                              });
                            }}
                            className="flex-1 min-w-0 bg-[#2a2a3a] text-[#E4E4E7] p-1 rounded-lg focus:outline-none"
                          />
                        </div>
                      </div>
                      {exerciseErrors[index] && (
                        <div className="mt-1 ml-2 text-xs space-y-1">
                          {exerciseErrors[index].name && (
                            <p className="text-[#E8793B]">
                              {exerciseErrors[index].name}
                            </p>
                          )}
                          {exerciseErrors[index].sets && (
                            <p className="text-[#E8793B]">
                              {exerciseErrors[index].sets}
                            </p>
                          )}
                          {exerciseErrors[index].reps && (
                            <p className="text-[#E8793B]">
                              {exerciseErrors[index].reps}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {errors.exercises && (
                  <p className="text-[#E8793B] text-xs mt-2">
                    {errors.exercises}
                  </p>
                )}
                <button className="p-1.5 mt-2 bg-[#1e1e2e] border border-[#2a2a3a] rounded-lg hover:border-[#E8793B] transition cursor-pointer">
                  <p className="bg-linear-to-r from-[#E8793B] to-[#F4A261] text-transparent bg-clip-text">
                    Save Workout
                  </p>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddWorkoutForm;
