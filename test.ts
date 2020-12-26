import test from "./mod.ts";

test.only("Expect 2 to be of type number", (expect) => {
	expect(2).toTypeOf("number");
});

test.group("Math tests", () => {
	test("Expect 2 + 2 to be 4", (expect) => {
		expect(2 + 2).toBe(4);
	});
	
	test.group("Positive sum tests", () => {
		test("Expect 2 + 2 to not be 5", (expect) => {
			expect(2 + 2).toNotBe(5);
		});
	});
});

test.run([]);