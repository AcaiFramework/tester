// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect";

// Modules
import expect 								from "../utils/assertions";
import { addOnly, getContext, setValue } 	from "../utils/context";
import { addTag, addTest } 					from "../utils/testQueue";

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