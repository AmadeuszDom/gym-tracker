export function countLastWeek(workouts: {date: string}[])  {
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);

    return workouts.filter((w) => {
      const wDate = new Date(w.date);
      return wDate >= weekAgo && wDate <= now;
    }).length;
  };
