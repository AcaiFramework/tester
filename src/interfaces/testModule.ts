// Interfaces
import { ExpectAssertionInterface } from "./expect";
import ExtraOptionsInterface 		from "./extraOptions";
import GroupAuxiliaryInterface 		from "./groupAuxiliary";
export default interface TestModuleInterface {
	/**
	 * Basic way of doing a test
	 */
	(description: string, callback: (expect: ExpectAssertionInterface) => void): ExtraOptionsInterface;

	group: (description: string, callback: (group: GroupAuxiliaryInterface) => void) => ExtraOptionsInterface;

	only: (description: string, callback: (expect: ExpectAssertionInterface) => void) => ExtraOptionsInterface;
	except: (description: string, callback: (expect: ExpectAssertionInterface) => void) => ExtraOptionsInterface;
	tag: (tag: string | string[], description: string, callback: (expect: ExpectAssertionInterface) => void) => void;
	
	find: (reg: string) => void;
	run: (tags?: string[], all?: boolean) => void;
}