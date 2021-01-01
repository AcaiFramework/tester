// Interfaces
import ContextInterface 		from "../interfaces/context.ts";
import GroupAuxiliaryInterface 	from "../interfaces/groupAuxiliary.ts";

// Modules
import { addDepth, addTag, setValue, addEvent } from "../utils/context.ts";
import { addGroup } 							from "../utils/groupQueue.ts";

const groupMethod = (description: string, callback: (expect: GroupAuxiliaryInterface) => void) => {
	const context: Partial<ContextInterface> = {};

	addGroup(async () => {
		addDepth();
		if (context.tag) addTag(context.tag);
		setValue("groupMessage", description);
		await callback({
			beforeAll	: (callback) => addEvent('beforeAll', 	callback),
			beforeEach	: (callback) => addEvent('beforeEach', 	callback),
			afterAll	: (callback) => addEvent('afterAll', 	callback),
			afterEach	: (callback) => addEvent('afterEach', 	callback),
		});
	});

	return {
		tag: (tags: string | string[]) => {
			context.tag = Array.isArray(tags) ? tags:[tags];
		}
	}
}

export default groupMethod;