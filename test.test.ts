import test from "./mod.ts";

test.group("Group description", () => {
	test("Test description", (expect) => {
		
		expect(2).toBe(2);
		expect(2).toBeDefined();
	});

	test("Test description 2", (expect) => {
		
		expect(2).toBe(2);
		expect(2).toBeDefined();
	});
});

test.group("Group two description", () => {
	test("Test description", (expect) => {
		
		expect(2).toBe(2);
		expect(2).toBeDefined();
	});

	test("Test description 2", (expect) => {
		
		expect(2).toBe(2);
		expect(2).toBeDefined();
	});
});