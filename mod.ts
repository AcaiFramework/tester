// Modules
import runMethod from "./src/modules/run.ts";
import testMethod from "./src/modules/test.ts";
import groupMethod from "./src/modules/group.ts";
import onlyMethod from "./src/modules/only.ts";
import exceptMethod from "./src/modules/except.ts";

// Interfaces
import TestModuleInterface from "./src/interfaces/testModule.ts";

// build
const test 	= testMethod as TestModuleInterface;
test.group 	= groupMethod;
test.run 	= runMethod;
test.only 	= onlyMethod;
test.except	= exceptMethod;

// export
export default test;