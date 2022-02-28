import { testMessage } from "./index";

test("Checks for test message", () => {
	expect(testMessage()).toBe("test message");
});
