// Interfaces
import { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Modules
import expect from "../utils/assertions.ts";
import { setValue } from "../utils/context.ts";
import { addTest } from "../utils/testQueue.ts";

const testMethod = (description: string, callback: (expect: ExpectAssertionInterface) => void) => {
	setValue("testMessage", description);
	addTest(async () => await callback(expect));
}

export default testMethod;