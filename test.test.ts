import test from "./mod.ts";

test.group("Group description", () => {
	test("Test description", (expect) => {
		
		expect(2).toBe(2);
		expect(2).toBeDefined();
	});
});