// -------------------------------------------------
// Properties
// -------------------------------------------------

let context	: Record<string, {success: boolean, messages:string[]}> = {};

// -------------------------------------------------
// Context methods
// -------------------------------------------------

export const getContext = () => context;

export const addValue = (key: string, value?: string, success = true) => {
	if (!context[key]) context[key] = {messages:[], success: true};

	if (value) context[key].messages.push(`\x1b[3${success ? "2":"1"}m${value}\x1b[37m`);
	context[key].success = context[key].success && success;
}

export const clearContext = () => {context = {}};