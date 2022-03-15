import {
	timespan,
	friendlyTimespanArray,
	friendlyTimespanString,
} from "../src/date";

test("timespan - returns millisecond difference", () => {
	const start = new Date(2020, 1, 1, 0, 0, 0, 0);
	const end = new Date(2020, 1, 1, 0, 0, 0, 500);
	expect(timespan(start, end)).toBe(500);
});

test("friendlyTimespanArray - converts to array of friendly units", () => {
	const start = new Date(2021, 1, 1, 0, 0, 0, 0);
	const end = new Date(2022, 1, 8, 9, 30, 12, 500);

	const ts = timespan(start, end);

	expect(friendlyTimespanArray(ts)).toEqual([
		"1 year",
		"1 week",
		"1 day",
		"9 hours",
		"30 minutes",
		"12 seconds",
		"500 milliseconds",
	]);
});

test("friendlyTimespanString - converts timespan to expected string", () => {
	const start = new Date(2021, 1, 1, 0, 0, 0, 0);
	const end = new Date(2022, 1, 8, 9, 30, 12, 500);

	const ts = timespan(start, end);

	expect(friendlyTimespanString(ts)).toBe(
		"1 year, 1 week, 1 day, 9 hours, 30 minutes, 12 seconds, and 500 milliseconds"
	);
});
