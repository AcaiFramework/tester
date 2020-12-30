// interfaces
import ContextInterface from "../interfaces/context.ts";

// -------------------------------------------------
// Properties
// -------------------------------------------------

const only	: string[] = [];
const except: string[] = [];

let context: ContextInterface = {
	depth 	: -1,
	order 	: 0,
	tag		: [],
};

// -------------------------------------------------
// Context methods
// -------------------------------------------------

export const getContext = () => context;

export const setValue = (key: keyof typeof context, value: unknown, addOrder = true) => {
	context = {...context, [key]:value, order: context.order + (addOrder ? 1:0)};
}

export const addTag = (tags: string[]) => {
	context = {...context, tag:[...context.tag,...tags]};
}

export const setContext = (value: ContextInterface) => {
	context = value;
}

export const addDepth = (quantity = 1) => {
	const depth = context.depth + quantity;
	context = {...context, depth, order: context.order + 1};
}

// -------------------------------------------------
// Only methods
// -------------------------------------------------

export const addOnly = (identifier: string) => {
	only.push(identifier);
}

export const getOnly = () => only;

// -------------------------------------------------
// Except methods
// -------------------------------------------------

export const addExcept = (identifier: string) => {
	except.push(identifier);
}

export const getExcept = () => except;