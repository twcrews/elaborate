import { friendlyList } from "../src/enum";

test("friendlyList - returns empty string on empty array", () => {
	expect(friendlyList([])).toBe("");
});

test("friendlyList - returns string in single-element array", () => {
	expect(friendlyList(["a"])).toBe("a");
});

test("friendlyList - returns expected string from two-element array", () => {
	expect(friendlyList(["a", "b"])).toBe("a and b");
});

test("friendlyList - returns expected string from three-element array", () => {
	expect(friendlyList(["a", "b", "c"])).toBe("a, b, and c");
});

test("friendlyList - returns expected string from array with comma-containing elements", () => {
	expect(friendlyList(["a, b", "c", "d"])).toBe("a, b; c; and d");
});
