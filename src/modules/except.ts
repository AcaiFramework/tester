// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect";

// Modules
import expect 								from "../utils/assertions";
import { addExcept, getContext, setValue } 	from "../utils/context";
import { addTag, addTest } 					from "../utils/testQueue";

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