// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Utils
import expect 		from "../utils/assertions.ts";
import { setValue } from "../utils/context.ts";
import { addTag, addTest }	from "../utils/testQueue.ts";

const testMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	setValue("testMessage", description);
	addTest(async () => await callback(expect));

	return {
		tag: (tags: string | string[]) => {
			addTag(Array.isArray(tags) ? tags:[tags]);
		}
	}
}

export default testMethod;