// Packages
import { walkSync } from "https://deno.land/std@0.82.0/fs/mod.ts";

const findMethod = (regex: RegExp) => {
	const root = Deno.cwd();
	
	for (const entry of walkSync(root, {
		includeDirs	: false,
		includeFiles: true,
		match		: [regex],
	})) {
		console.log(entry.path);
	}
}

export default findMethod;