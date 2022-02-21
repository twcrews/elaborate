const testMessage = require("./index");

test("Checks for test message", () => {
	expect(testMessage()).toBe("test message");
});
