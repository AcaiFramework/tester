// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Modules
import expect 								from "../utils/assertions.ts";
import { addExcept, getContext, setValue } 	from "../utils/context.ts";
import { addTag, addTest } 							from "../utils/testQueue.ts";

const exceptMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	const context = getContext();

	setValue("testMessage", description);
	addExcept(context.groupMessage + description);
	addTest(async () => await callback(expect));

	return {
		tag: (tags: string | string[]) => {
			addTag(Array.isArray(tags) ? tags:[tags]);
		}
	}
}

export default exceptMethod;