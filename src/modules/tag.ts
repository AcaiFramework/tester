// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Modules
import expect 								from "../utils/assertions.ts";
import { addOnly, getContext, setValue } 	from "../utils/context.ts";
import { addTest } 							from "../utils/testQueue.ts";

const tagMethod = (tags: string | string [], description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	const context = getContext();

	setValue("testMessage", description);
	addOnly(context.groupMessage + description);
	addTest(async () => await callback(expect), Array.isArray(tags) ? tags:[tags]);
}

export default tagMethod;