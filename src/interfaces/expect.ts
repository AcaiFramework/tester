export default interface ExpectInterface { 
	toBe 			(toTest: unknown): ExpectInterface;
	toNotBe 		(toTest: unknown): ExpectInterface;
	toTypeOf 		(toTest: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"): ExpectInterface;
	toBeDefined 	(): ExpectInterface;
	toBeUndefined 	(): ExpectInterface;
	toBeNull 		(): ExpectInterface;
	toNotBeNull 	(): ExpectInterface;
}

export type ExpectAssertionInterface = (baseAssertion: unknown) => ExpectInterface;