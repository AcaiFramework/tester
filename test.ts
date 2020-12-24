import groupMethod 	from "./src/modules/group.ts";
import runMethod 	from "./src/modules/run.ts";
import testMethod 	from "./src/modules/test.ts";

testMethod("1", (expect) => {
	expect(2).toTypeOf("number");
});

testMethod("2", (expect) => {
	expect("2").toTypeOf("number");
});

groupMethod("Sum tests", () => {
	testMethod("3", (expect) => {
		expect(2 + 2).toEqual(4);
	});

	testMethod("4", (expect) => {
		expect(2 + 2).toEqual(5);
	});
	
	groupMethod("Positive sum tests", () => {
		testMethod("5", (expect) => {
			expect(2 + 2).toEqual(5);
		});

		testMethod("6", (expect) => {
			expect(2 + 2).toEqual(4);
		});
	});
});
	
testMethod("7", (expect) => {
	expect(2).toTypeOf("number");
});

testMethod("8", (expect) => {
	expect("2").toTypeOf("number");
});

runMethod();