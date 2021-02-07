// Packages
import * as glob from "glob";
import * as path from "path";

const findMethod = async (regex: string) => {
	const files = glob.sync(regex, {
		cwd		: process.cwd(),
		nodir	: true,
	});

	files.forEach(async file => await import(path.join(process.cwd(), file)));
}

export default findMethod;