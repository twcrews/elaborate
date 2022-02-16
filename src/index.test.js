import testMessage from "../../src/index";
test("Prints test message to console.", () => {
	expect(testMessage()).toLog("This is a message from the demo package");
});
