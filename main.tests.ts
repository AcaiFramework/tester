import test from "./mod.ts";

test.group("group tests", () => {
	test("this should run", (expect) => {
		expect(2).toBe(2);
	});
}).tag(["main"]);

test.group("group tests", () => {
	test("this shouldn't run", (expect) => {
		expect(2).toBe(2);
	});
}).tag(["secondary"]);