import test from "./mod";

async function main() {
	await test.find("./*/*(*.test.js|*.test.ts)");
	await test.run(["tag2"]);
}

main();