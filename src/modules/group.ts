// Interfaces
import ContextInterface 			from "../interfaces/context.ts";
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Modules
import expect 							from "../utils/assertions.ts";
import { addDepth, addTag, setValue } 	from "../utils/context.ts";
import { addGroup } 					from "../utils/groupQueue.ts";

const groupMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	const context: Partial<ContextInterface> = {};

	addGroup(async () => {
		addDepth();
		if (context.tag) addTag(context.tag);
		setValue("groupMessage", description);
		await callback(expect);
	});

	return {
		tag: (tags: string | string[]) => {
			context.tag = Array.isArray(tags) ? tags:[tags];
		}
	}
}

export default groupMethod;