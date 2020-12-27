// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Modules
import expect 					from "../utils/assertions.ts";
import { addDepth, setValue } 	from "../utils/context.ts";
import { addGroup } 			from "../utils/groupQueue.ts";

const groupMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	addGroup(async () => {
		addDepth();
		setValue("groupMessage", description);
		await callback(expect);
	});

	return {
		tag: (tags: string | string[]) => {
			
		}
	}
}

export default groupMethod;