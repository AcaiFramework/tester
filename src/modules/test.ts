// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect";

// Utils
import expect 				from "../utils/assertions";
import { setValue } 		from "../utils/context";
import { addFail } 			from "../utils/failCount";
import { getStackTrace } 	from "../utils/logging";
import { addValue }			from "../utils/ranTests";
import { addTag, addTest }	from "../utils/testQueue";

const testMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	const trace = getStackTrace(3);

	setValue("testMessage", description);
	addValue(description);
	
	addTest(async () => {
		try {
			await callback(expect);
		}
		catch (e) {
			addFail(e, trace);
			addValue(description, "exception thrown", false);
		}
	});

	return {
		tag: (tags: string | string[]) => {
			addTag(Array.isArray(tags) ? tags:[tags]);
		}
	}
}

export default testMethod;