// Interfaces
import ExpectInterface, { ExpectAssertionInterface } from "./expect.ts";

export default interface TestModuleInterface {
	/**
	 * Basic way of doing a test
	 */
	(description: string, callback: (expect: ExpectAssertionInterface) => void): void;

	group: (description: string, callback: () => void) => void;

	only: (description: string, callback: (expect: ExpectAssertionInterface) => void) => void;
	except: (description: string, callback: (expect: ExpectAssertionInterface) => void) => void;
	
	find: (reg: RegExp) => void;
	run: (tags?: string[], all?: boolean) => void;
}