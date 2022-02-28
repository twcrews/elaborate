export const timespan = (start: Date, end: Date): number => {
	return end.getTime() - start.getTime();
};

export const friendlyTimespan = (timespan: number): string => {
	const ms = timespan % 1000;
	const s = Math.floor(timespan / 1000) % 60;
	const m = Math.floor(timespan / 1000 / 60) % 60;
	const h = Math.floor(timespan / 1000 / 60 / 60);
	return `${h}h ${m}m ${s}s ${ms}ms`;
};
