<p align="center"><img src="https://api.aposoftworks.com/storage/image/ehRdFIz6tqiERXID1SIXAeu0mmTBKLdixIXsNj9s.png" width="256"></p>

# aGAIN
## Açai Testing Framework documentation

[![GitHub](https://img.shields.io/github/license/AcaiFramework/tester)](https://github.com/AcaiFramework/tester) [![Build Status](https://travis-ci.org/AcaiFramework/tester.svg?branch=master)](https://travis-ci.org/AcaiFramework/tester) [![Support](https://img.shields.io/badge/Patreon-Support-orange.svg?logo=Patreon)](https://www.patreon.com/rafaelcorrea)


For our goals, the existing testing libraries didn't suffice, so we made our own. We made the tests to easily scale and allow you to have an extremely free enviroment to tinker with.

** Attention! ** All of tests in the same context are ran before tests on the following context.

## Usage
Assertions should run inside of a test scope, see a simple example:
``` typescript
import test from "@acai/testing";

test("Test that 2 + 2 is equal 4", expect => {
	expect(2 + 2).toEqual(4);
});

// You can run all the tests recorded using test.run, this will print
// in the console
test.run();
```