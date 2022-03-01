import { unitString } from "../src/unit";

test("unitString - correctly preserves singular units", () => {
	expect(unitString("hour", 1)).toBe("hour");
});

test("unitString - correctly pluralizes decimals under 1", () => {
	expect(unitString("hour", 0.5)).toBe("hours");
});

test("unitString - correctly pluralizes decimals over 1", () => {
	expect(unitString("hour", 1.5)).toBe("hours");
});

test("unitString - correctly pluralizes zero", () => {
	expect(unitString("hour", 0)).toBe("hours");
});

test("unitString - correctly preserves singular negative 1", () => {
	expect(unitString("hour", -1)).toBe("hour");
});

test("unitString - correctly pluralizes negatives != 1", () => {
	expect(unitString("hour", -2)).toBe("hours");
});
