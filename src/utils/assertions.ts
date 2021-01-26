// Interfaces
import ExpectInterface, { ExpectAssertionInterface } from "../interfaces/expect.ts";

// Utils
import { getContext } from "./context.ts";
import { addValue } from "./ranTests.ts";
import { addFail } from "./failCount.ts";
import { fail, success } from "./logging.ts";

const assertions = (valueToAssert: unknown) => {
	const assertions = function (this: ExpectInterface) {

		// -------------------------------------------------
		// toEqual
		// -------------------------------------------------

		this.toBe = (valueToTest) => {
			const context 	= getContext();
			const passes 	= typeof valueToAssert === "object" ? (JSON.stringify(valueToAssert) === JSON.stringify(valueToTest)) : valueToAssert === valueToTest;

			// add to count
			if (!passes) {
				if (typeof valueToAssert === "object") {
					addFail(`${JSON.stringify(valueToAssert)} is not equal to ${JSON.stringify(valueToTest)}`);
				}
				else {
					addFail(`${valueToAssert} is not equal to ${valueToTest}`);
				}
			}

			// feedback log
			if (passes)
				addValue(context.testMessage as string, "toBe", true);
			else
				addValue(context.testMessage as string, "toBe", false);

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
				addValue(context.testMessage as string, "toNotBe", true);
			else
				addValue(context.testMessage as string, "toNotBe", false);

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
				addValue(context.testMessage as string, "toTypeOf", true);
			else
				addValue(context.testMessage as string, "toTypeOf", false);

			return this;
		}

		// -------------------------------------------------
		// toDefined
		// -------------------------------------------------

		this.toBeDefined = () => {
			const passes 	= valueToAssert !== undefined;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is not defined`);

			// feedback log
			if (passes)
				addValue(context.testMessage as string, "toBeDefined", true);
			else
				addValue(context.testMessage as string, "toBeDefined", false);

			return this;
		}

		// -------------------------------------------------
		// toUndefined
		// -------------------------------------------------

		this.toBeUndefined = () => {
			const passes 	= valueToAssert === undefined;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is defined`);

			// feedback log
			if (passes)
				addValue(context.testMessage as string, "toBeUndefined", true);
			else
				addValue(context.testMessage as string, "toBeUndefined", false);

			return this;
		}

		// -------------------------------------------------
		// toNull
		// -------------------------------------------------

		this.toBeNull = () => {
			const passes 	= valueToAssert === null;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is not null`);

			// feedback log
			if (passes)
				addValue(context.testMessage as string, "toBeNull", true);
			else
				addValue(context.testMessage as string, "toBeNull", false);

			return this;
		}

		// -------------------------------------------------
		// toNotNull
		// -------------------------------------------------

		this.toNotBeNull = () => {
			const passes 	= valueToAssert !== null;
			const context 	= getContext();

			// add to count
			if (!passes) addFail(`${valueToAssert} is null`);

			// feedback log
			if (passes)
				addValue(context.testMessage as string, "toNotBeNull", true);
			else
				addValue(context.testMessage as string, "toNotBeNull", false);

			return this;
		}

		return this;
	}

	return assertions.bind({} as ExpectInterface)();
}

export default assertions as ExpectAssertionInterface;