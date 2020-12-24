export default interface ExpectInterface { 
	toBe 		(toTest: unknown): ExpectInterface;
	toNotBe 	(toTest: unknown): ExpectInterface;
	toTypeOf 	(toTest: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"): ExpectInterface;
	toDefined 	(): ExpectInterface;
	toUndefined (): ExpectInterface;
	toNull 		(): ExpectInterface;
	toNotNull 	(): ExpectInterface;
}

export type ExpectAssertionInterface = (baseAssertion: unknown) => ExpectInterface;