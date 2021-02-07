// Modules
import runMethod 	from "./src/modules/run";
import testMethod	from "./src/modules/test";
import onlyMethod 	from "./src/modules/only";
import findMethod 	from "./src/modules/find";
import groupMethod 	from "./src/modules/group";
import exceptMethod from "./src/modules/except";
import tagMethod 	from "./src/modules/tag";

// Interfaces
import TestModuleInterface from "./src/interfaces/testModule";

// build
const test 	= testMethod as TestModuleInterface;
test.run 	= runMethod;
test.tag	= tagMethod;
test.only 	= onlyMethod;
test.find	= findMethod;
test.group 	= groupMethod;
test.except	= exceptMethod;

// export
export default test;