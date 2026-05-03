import { useState, useCallback } from "react";
import type { Goals } from "../types/Goals";

export function useGoals() {
    const [goals, setGoalsState] = useState<Goals>(() => {
        const raw = localStorage.getItem("goals");
        if (raw) {
            try {
                return JSON.parse(raw) as Goals;
            } catch (error) {
                console.error("Failed to parse goals from localStorage", error);
            }
        }
        return {
            weightLifted: 0,
            totalTimeMinutes: 0,
            setsPerWeek: 0,
        }
    });

    const setGoals = useCallback((newGoals: Goals) => {
        setGoalsState(newGoals);
        localStorage.setItem("goals", JSON.stringify(newGoals));
    }, []);

    return {goals, setGoals};
}
