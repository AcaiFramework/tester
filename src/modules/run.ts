// Utils
import { getContext, getExcept, getOnly, setContext } 	from "../utils/context.ts";
import { getTests } 									from "../utils/testQueue.ts";
import { getGroups, resetGroups } 						from "../utils/groupQueue.ts";
import { log } 											from "../utils/logging.ts";
import { getFail } 										from "../utils/failCount.ts";
import { repeat } 										from "../utils/string.ts";
import ContextInterface from "../interfaces/context.ts";

const runMethod = async (tags: string[] = [], runAll = false) => {
	// -------------------------------------------------
	// Cache groups
	// -------------------------------------------------
	let cbs 		= getGroups();

	while (cbs.length > 0) {
		resetGroups();

		// run all groups
		for (let i = 0; i < cbs.length; i += 1) {
			setContext(cbs[i].context);
			await cbs[i].cb();
		}

		// break loop if no callbacks left
		cbs = getGroups();
	}

	// -------------------------------------------------
	// Sort tests
	// -------------------------------------------------

	let tests = getTests().reverse();
	let currMessage = "";
	
	tests = tests.sort((comparator1, comparator2) => {
		return comparator1.context.order - comparator2.context.order;
	});
	
	// -------------------------------------------------
	// No tests found
	// -------------------------------------------------

	if (tests.length === 0) {
		console.log("\n\n No tests to be run");
		return;
	}
	
	// -------------------------------------------------
	// Run tests
	// -------------------------------------------------

	console.log("\n\nRunning tests");
	console.log(repeat("=", 20));
	console.log("");

	// get info
	const only 		= getOnly();
	const except 	= getExcept();
	let lastContext = {} as ContextInterface;

	// run all tests
	for (let i = 0; i < tests.length; i += 1) {
		setContext(tests[i].context);
		const context = getContext();

		// skip test if it was not added to only
		if (!runAll && only.length > 0 && !only.find(i => i === `${context.groupMessage}${context.testMessage}`)) {
			continue;
		}

		// skip test if it was added to except
		if (!runAll && except.length > 0 && except.find(i => i === `${context.groupMessage}${context.testMessage}`)) {
			continue;
		}

		// skip test if not added to tags list
		if (tags.length > 0 && !tags.find(i => context.tag.find(x => x === i))) {
			continue;
		}

		// check if all tests of the last type were run
		if (lastContext.afterAll && lastContext.afterAll.length > 0 && `${lastContext.groupMessage}` !== `${context.groupMessage}`) {
			lastContext.afterAll.forEach(i => i());
		}

		if (currMessage !== context.groupMessage) {
			if (context.groupMessage) {
				log(context.groupMessage, true);
				currMessage = context.groupMessage;

				// run all before all
				context.beforeAll.forEach(i => i());
			}
		}

		// run all before each
		context.beforeEach.forEach(i => i());

		await tests[i].cb();

		// run all after each
		context.afterEach.forEach(i => i());
		lastContext = context;
	}

	// run all after all
	getContext().afterAll.forEach(i => i());
	
	// -------------------------------------------------
	// Feedback
	// -------------------------------------------------

	const fails = getFail();

	console.log("\nResults");
	console.log(repeat("=", 20));
	console.log(`Total:\t${tests.length}`);
	console.log(`Failed:\t${fails.length}`);
	console.log("");
	
	// -------------------------------------------------
	// Error log
	// -------------------------------------------------

	if (fails.length > 0) {
		console.log("Error log");
		console.log(repeat("=", 20));

		for (let i = 0; i < fails.length; i++) {
			console.log(`\x1b[31m${fails[i].testMessage}\x1b[37m`);
			console.log(`\x1b[31m${fails[i].message}\x1b[37m`);
			console.log(`\x1b[31m${fails[i].stack}\x1b[37m\n`);
		}

		Deno.exit(1);
	}
	Deno.exit(0);
}

export default runMethod;