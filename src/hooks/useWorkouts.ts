import {useState, useEffect} from 'react';

export interface ExerciseItem{
    name: string,
    sets: number,
    reps: number,
}

export interface WorkoutData {
    planName: string,
    date: string
    exercises: ExerciseItem[],
}

export function useWorkouts() {
    const [workouts, setWorkouts] = useState<WorkoutData[]>([]);

    useEffect(() => {
        const raw = localStorage.getItem("workouts");
        if (raw) {
            try {
                setWorkouts(JSON.parse(raw));
        } catch {
            setWorkouts([]);
        }
    }}, []);
    return {workouts, setWorkouts}
}