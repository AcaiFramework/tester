// Modules
import testMethod from "./src/modules/test.ts";

// Interfaces
import TestModuleInterface from "./src/interfaces/testModule.ts";
import groupMethod from "./src/modules/group.ts";
import runMethod from "./src/modules/run.ts";

// build
const test 	= testMethod as TestModuleInterface;
test.group 	= groupMethod;
test.run 	= runMethod;

// export
export default test;