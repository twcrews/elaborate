import { unitToLocaleString, smartPluralize, unitToWords } from "../src/unit";

test("smartPluralize - pluralizes non-single value", () => {
	expect(smartPluralize(2, "day")).toBe("days");
});

test("smartPluralize - ignores 1", () => {
	expect(smartPluralize(1, "day")).toBe("day");
});

test("unitToLocaleString - localizes large numbers", () => {
	expect(unitToLocaleString(1234, "hour")).toBe("1,234 hours");
});

test("unitToLocaleString - handles lack of unit", () => {
	expect(unitToLocaleString(1234)).toBe("1,234");
});

test("unitToWords - handles large numbers correctly", () => {
	expect(unitToWords(1234, "hour")).toBe(
		"one thousand, two hundred thirty-four hours"
	);
});

test("unitToWords - handles negative numbers correctly", () => {
	expect(unitToWords(-1, "hour")).toBe("minus one hour");
});
