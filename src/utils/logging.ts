// Utils
import { repeat } 		from "./string.ts";
import { getContext } 	from "./context.ts";

export const success = (message: string) => {
	const context = getContext();
	const prefix = context.groupMessage ? "\u2002":"";
	console.log(`${repeat("\t", context.depth)}${prefix}\x1b[32m✓ - ${message}\x1b[37m`);
}

export const fail = (message: string) => {
	const context = getContext();
	const prefix = context.groupMessage ? "\u2002":"";
	console.log(`${repeat("\t", context.depth)}${prefix}\x1b[31mX - ${message}\x1b[37m`);
}

export const log = (message: string | string[], breakLine = false) => {
	const context = getContext();
	console.log(`${breakLine ? "\n":""}${repeat("\t", context.depth)}${message}`);
}

export const getStackTrace = () => {
	var stack;
  
	try {
		throw new Error('');
	}
	catch (error) {
		stack = error.stack || '';
	}
	
	stack = stack.split('\n').map(function (line: string) { return line.trim(); });
	return stack[4];
};