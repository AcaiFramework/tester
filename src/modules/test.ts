// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Utils
import expect 				from "../utils/assertions.ts";
import { setValue } 		from "../utils/context.ts";
import { addFail } 			from "../utils/failCount.ts";
import { getStackTrace } 	from "../utils/logging.ts";
import { addValue } 		from "../utils/ranTests.ts";
import { addTag, addTest }	from "../utils/testQueue.ts";

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