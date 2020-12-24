import test from "./mod.ts";

test("1", (expect) => {
	expect(2).toTypeOf("number");
});

test("2", (expect) => {
	expect("2").toTypeOf("number").toBe("2");
});

test.group("Sum tests", () => {
	test("3", (expect) => {
		expect(2 + 2).toBe(4);
	});

	test("4", (expect) => {
		expect(2 + 2).toBe(5);
	});
	
	test.group("Positive sum tests", () => {
		test("5", (expect) => {
			expect(2 + 2).toBe(5);
		});

		test("6", (expect) => {
			expect(2 + 2).toBe(4);
		});
	});
});
	
test("7", (expect) => {
	expect(2).toTypeOf("number");
});

test("8", (expect) => {
	expect("2").toTypeOf("number");
});

test.run();