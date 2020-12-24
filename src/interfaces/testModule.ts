// Interfaces
import ExpectInterface, { ExpectAssertionInterface } from "./expect.ts";

export default interface TestModuleInterface {
	/**
	 * Basic way of doing a test
	 */
	(description: string, callback: (expect: ExpectAssertionInterface) => void): void;
}