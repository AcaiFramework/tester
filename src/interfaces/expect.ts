export default interface ExpectInterface { 
	toEqual (toTest: unknown): ExpectInterface;
	toNotEqual (toTest: unknown): ExpectInterface;
	toTypeOf (toTest: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"): ExpectInterface;
}

export type ExpectAssertionInterface = (baseAssertion: unknown) => ExpectInterface;