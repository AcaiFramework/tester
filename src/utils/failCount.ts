// Interfaces
import { getContext } 		from "./context";
import { getStackTrace } 	from "./logging";
import ContextInterface 	from "../interfaces/context";

const fails: (ContextInterface & {message: string, stack: string})[] = [];

export const addFail = (message: string, stack?: string) => {
	const context = getContext();
	fails.push({...context, message, stack: stack || getStackTrace()})
};

export const getFail = () => fails;