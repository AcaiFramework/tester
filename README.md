<p align="center"><img src="https://api.aposoftworks.com/storage/image/ehRdFIz6tqiERXID1SIXAeu0mmTBKLdixIXsNj9s.png" width="256"></p>

# aGAIN
## Açai Testing Framework documentation

[![Build Status](https://travis-ci.org/AcaiFramework/tester.svg?branch=production)](https://travis-ci.org/AcaiFramework/tester) [![Support](https://img.shields.io/badge/Patreon-Support-orange.svg?logo=Patreon)](https://www.patreon.com/rafaelcorrea)

A testing suite that proposes some tools that help you organize and easily escalate your own tests. 
** Attention! ** All of tests in the same context are ran before tests on the following context.

## Usage
Assertions should run inside of a test scope, see a simple example:
``` typescript
import test from "@acai/tester";

test("Test that 2 + 2 is equal 4", expect => {
	expect(2 + 2).toEqual(4);
});

// You can run all the tests recorded using test.run, this will print
// in the console
test.run();
```

### Automatic test find
You can automatically search for tests in your current project using `test.find(/regex/)`, you can pass a regex to match a test file.

### Grouping
You can group tests to easily distinguish between them without writing multiple files.
``` typescript
import test from "@acai/tester";

test.group("Group description", () => {
    /*Your tests here*/ 
});
```

### Except/Only
You can filter tests to be ran with except/only, working opposite of one another. They stack, so if you have two only tests, those two will run.
``` typescript
import test from "@acai/tester";

test.only("test description", () => {
   // Your test here 
});
```
You can also pass a second parameter to true, to force running all tests, ignoring the except/only.

### Tag
You can tag your tests/groups, to filter them when running your tests. For example:
``` typescript
import test from "@acai/tester";

test("test description", () => {
   // Your test here 
}).tag(["tag1", "tag2"]);

test("other test description", () => {
   // Your test here 
}).tag(["tag3"]);

// Will only run tests marked with the tag2 tag
await test.run(["tag2"]);
```
