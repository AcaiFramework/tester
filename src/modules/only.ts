// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Modules
import expect 								from "../utils/assertions.ts";
import { addOnly, getContext, setValue } 	from "../utils/context.ts";
import { addTag, addTest } 							from "../utils/testQueue.ts";

const onlyMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	const context = getContext();

	setValue("testMessage", description);
	addOnly(context.groupMessage + description);
	addTest(async () => await callback(expect));

	return {
		tag: (tags: string | string[]) => {
			addTag(Array.isArray(tags) ? tags:[tags]);
		}
	}
}

export default onlyMethod;