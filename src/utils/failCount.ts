// Interfaces
import ContextInterface from "../interfaces/context.ts";
import { getContext } from "./context.ts";
import { getStackTrace } from "./logging.ts";

const fails: (ContextInterface & {message: string, stack: string})[] = [];

export const addFail = (message: string) => {
	const context = getContext();
	fails.push({...context, message, stack: getStackTrace()})
};

export const getFail = () => fails;