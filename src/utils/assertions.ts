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

		this.toBe = (valueToTest) => {
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

		this.toNotBe = (valueToTest) => {
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

		// -------------------------------------------------
		// toDefined
		// -------------------------------------------------

		this.toDefined = () => {
			const passes 	= valueToAssert !== undefined;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is not defined`);

			// feedback log
			if (passes)
				success(context.testMessage as string);
			else
				fail(context.testMessage as string);

			return this;
		}

		// -------------------------------------------------
		// toUndefined
		// -------------------------------------------------

		this.toUndefined = () => {
			const passes 	= valueToAssert === undefined;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is defined`);

			// feedback log
			if (passes)
				success(context.testMessage as string);
			else
				fail(context.testMessage as string);

			return this;
		}

		// -------------------------------------------------
		// toNull
		// -------------------------------------------------

		this.toNull = () => {
			const passes 	= valueToAssert === null;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is not null`);

			// feedback log
			if (passes)
				success(context.testMessage as string);
			else
				fail(context.testMessage as string);

			return this;
		}

		// -------------------------------------------------
		// toNotNull
		// -------------------------------------------------

		this.toNotNull = () => {
			const passes 	= valueToAssert !== null;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is null`);

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