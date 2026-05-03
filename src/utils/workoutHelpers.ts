export interface ExerciseItem {
    name: string,
    sets: number,
    reps: number,
    weight: number,
}

export interface WorkoutData{
    /** Name of the workout plan */
    planName: string;
    /** Date string – ISO‑8601 is recommended (e.g. "2026-04-28") */
    date: string;
    /** List of performed exercises for this workout */
    exercises: ExerciseItem[];
}



export function totalWeight(workouts: WorkoutData[]): number {
    return workouts.reduce( (sum, w) => {
        const wWeight = w.exercises.reduce( (exerciseSum, exercise) => exerciseSum + (exercise.sets * exercise.reps) * exercise.weight,0,);
        return sum + wWeight;
    },0,)
}

export function totalSets(workouts: WorkoutData[]): number {
    return workouts.reduce( (sum,w) => 
        sum + w.exercises.reduce((exerciseSum, exercise) => exerciseSum + exercise.sets,0),0
    );
}

export function totalReps(workouts: WorkoutData[]): number {
    return workouts.reduce( (sum,w) =>
        sum + w.exercises.reduce((exerciseSum, exercise) => exerciseSum + exercise.reps,0),0
    );
}

export function workoutsLastWeek(workouts: WorkoutData[]): WorkoutData[] {
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);

    return workouts.filter(w => {
        const wDate = new Date(w.date);
        return wDate >= weekAgo && wDate <= now;
    })
}

/*  export function totalTimePerWeek(
    workouts: WorkoutData[],
    minutesPerSet = 5,
  ): number {
    const totalSets = totalSetsPerWeek(workouts);
    return totalSets * minutesPerSet;
  }
 */

export const weeklyStats = (workouts: WorkoutData[]) => {
    const lastWeek = workoutsLastWeek(workouts);
    return {
        totalWeight: totalWeight(lastWeek),
        totalSets: totalSets(lastWeek),
        totalReps: totalReps(lastWeek),
        count: lastWeek.length,

    };
};