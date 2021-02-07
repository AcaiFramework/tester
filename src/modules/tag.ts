// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect";

// Modules
import expect 								from "../utils/assertions";
import { addOnly, getContext, setValue } 	from "../utils/context";
import { addTest } 							from "../utils/testQueue";

const tagMethod = (tags: string | string [], description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	const context = getContext();

	setValue("testMessage", description);
	addOnly(context.groupMessage + description);
	addTest(async () => await callback(expect), Array.isArray(tags) ? tags:[tags]);
}

export default tagMethod;