// Packages
import { walkSync } from "https://deno.land/std@0.82.0/fs/mod.ts";

const findMethod = async (regex: RegExp) => {	
	for await (const entry of walkSync(Deno.cwd(), {
		includeDirs	: false,
		includeFiles: true,
		match		: [regex],
	})) {
		await import (entry.path.replace(/^.+?(\\|\/)/, "/"));
	}
}

export default findMethod;