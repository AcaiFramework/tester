import test from "./index";

async function main() {
	await test.find("./*/*(*.test.js|*.test.ts)");
	await test.run();
}

main();