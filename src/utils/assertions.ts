// Interfaces
import ExpectInterface, { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Utils
import { getContext } from "./context.ts";
import { addFail } from "./failCount.ts";
import { fail, success } from "./logging.ts";

const assertions = (valueToAssert: unknown) => {
	const assertions = function (this: ExpectInterface) {

		// -------------------------------------------------
		// toEqual
		// -------------------------------------------------

		this.toEqual = (valueToTest) => {
			const context 	= getContext();
			const passes 	= valueToAssert === valueToTest;

			// add to count
			if (!passes) addFail(`${valueToAssert} is not equal to ${valueToTest}`);

			// feedback log
			if (passes)
				success(context.testMessage as string);
			else
				fail(context.testMessage as string);

			return this;
		}

		// -------------------------------------------------
		// toNotEqual
		// -------------------------------------------------

		this.toNotEqual = (valueToTest) => {
			const context 	= getContext();
			const passes 	= valueToAssert !== valueToTest;

			// add to count
			if (!passes) addFail(`${valueToAssert} shouldn't be equal to ${valueToTest}`);

			// feedback log
			if (passes)
				success(context.testMessage as string);
			else
				fail(context.testMessage as string);

			return this;
		}

		// -------------------------------------------------
		// toTypeOf
		// -------------------------------------------------

		this.toTypeOf = (valueToTest) => {
			// deno-lint-ignore valid-typeof
			const passes 	= valueToTest === typeof valueToAssert;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is not of the type ${valueToTest}`);

			// feedback log
			if (passes)
				success(context.testMessage as string);
			else
				fail(context.testMessage as string);

			return this;
		}

		return this;
	}

	return assertions.bind({} as ExpectInterface)();
}

export default assertions as ExpectAssertionInterface;