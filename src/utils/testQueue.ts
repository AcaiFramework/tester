// interfaces
import TestQueueInterface from "../interfaces/queue.ts";

// Utils
import { getContext } from "./context.ts";

// -------------------------------------------------
// Properties
// -------------------------------------------------

let tests: TestQueueInterface[] = [];

// -------------------------------------------------
// Methods
// -------------------------------------------------

export const getTests = () => tests;

export const resetTests = () => {
	tests = [];
}

export const addTest = (test: () => void) => {
	const context = getContext();
	tests.push({context, cb: test});
}