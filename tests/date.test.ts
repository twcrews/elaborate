import { timespan, friendlyTimespan } from "../src/date";

test("timespan - returns millisecond difference", () => {
	const start = new Date(2020, 1, 1, 0, 0, 0, 0);
	const end = new Date(2020, 1, 1, 0, 0, 0, 500);
	expect(timespan(start, end)).toBe(500);
});

test("friendlyTimespan - converts milliseconds to string", () => {
	const timespan = 500;
	expect(friendlyTimespan(timespan)).toBe("0h 0m 0s 500ms");
});

test("friendlyTimespan - converts seconds to string", () => {
	const timespan = 1000;
	expect(friendlyTimespan(timespan)).toBe("0h 0m 1s 0ms");
});

test("friendlyTimespan - converts minutes to string", () => {
	const timespan = 60000;
	expect(friendlyTimespan(timespan)).toBe("0h 1m 0s 0ms");
});

test("friendlyTimespan - converts hours to string", () => {
	const timespan = 3600000;
	expect(friendlyTimespan(timespan)).toBe("1h 0m 0s 0ms");
});
