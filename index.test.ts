const index = require("./index");

test("Checks for test message", () => {
	expect(index.testMessage()).toBe("test message");
});
