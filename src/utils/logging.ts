// Utils
import { repeat } 		from "./string.ts";
import { getContext } 	from "./context.ts";

export const success = (message: string) => {
	const context 	= getContext();
	const prefix 	= context.groupMessage ? "\u2002":"";
	const print 	= `${repeat("\t", context.depth)}${prefix}\x1b[32m✓\x1b[37m - ${message}`;
	
	return print;
}

export const fail = (message: string) => {
	const context 	= getContext();
	const prefix 	= context.groupMessage ? "\u2002":"";
	const print 	= `${repeat("\t", context.depth)}${prefix}\x1b[31mX\x1b[37m - ${message}`;
	
	return print;
}

export const log = (message: string | string[], breakLine = false) => {
	const context 	= getContext();
	const print 	= `${breakLine ? "\n":""}${repeat("\t", context.depth)}${message}`;
	
	return print;
}

export const getStackTrace = (index = 4) => {
	var stack;
  
	try {
		throw new Error('');
	}
	catch (error) {
		stack = error.stack || '';
	}
	
	stack = stack.split('\n').map(function (line: string) { return line.trim(); });
	return stack[index];
};