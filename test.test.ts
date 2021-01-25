import test from "./mod.ts";

test.group("Group description", () => {
	test("Test description 1", (expect) => {
		expect(1).toBe(1);
	});
	test("Test description 2", (expect) => {
		expect(1).toBe(1);
	});
	test("Test description 3", (expect) => {
		expect(1).toBe(1);
		expect(1).toBe(2);
	});
}).tag(["tag1"]);

test.group("Group description 2", () => {
	test("Test description 4", (expect) => {
		expect(1).toBe(1);
	});
	test("Test description 5", (expect) => {
		expect(1).toBe(1);
	});
	test("Test description 6", (expect) => {
		expect(1).toBe(1);
		expect(1).toBe(2);
	});
}).tag(["tag2"]);

test.group("Group description", () => {
	test("Test description 7", (expect) => {
		expect(1).toBe(1);
	});
	test("Test description 8", (expect) => {
		expect(1).toBe(1);
	});
	test("Test description 9", (expect) => {
		expect(1).toBe(1);
		expect(1).toBe(2);
	});
}).tag(["tag3"]);