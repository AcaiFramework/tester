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

export const addTest = (test: () => void, tag: string[] = []) => {
	const context = getContext();
	tests.push({context: {...context, tag: [...context.tag, ...tag]}, cb: test});
}

export const addTag = (tags: string[]) => {
	const lasttags = tests[tests.length - 1].context.tag;
	tests[tests.length - 1].context.tag = [...(lasttags ? lasttags:[]), ...tags];
}