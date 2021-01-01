// Interfaces
import ExtraOptionsInterface 		from "./extraOptions.ts";
import { ExpectAssertionInterface } from "./expect.ts";
import GroupAuxiliaryInterface 		from "./groupAuxiliary.ts";
export default interface TestModuleInterface {
	/**
	 * Basic way of doing a test
	 */
	(description: string, callback: (expect: ExpectAssertionInterface) => void): ExtraOptionsInterface;

	group: (description: string, callback: (group: GroupAuxiliaryInterface) => void) => ExtraOptionsInterface;

	only: (description: string, callback: (expect: ExpectAssertionInterface) => void) => ExtraOptionsInterface;
	except: (description: string, callback: (expect: ExpectAssertionInterface) => void) => ExtraOptionsInterface;
	tag: (tag: string | string[], description: string, callback: (expect: ExpectAssertionInterface) => void) => void;
	
	find: (reg: RegExp) => void;
	run: (tags?: string[], all?: boolean) => void;
}