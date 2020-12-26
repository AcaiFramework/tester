import test from "./mod.ts";

test.find(/\S\.(test|tests)\.(js|ts)$/);
test.run();