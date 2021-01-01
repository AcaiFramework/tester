export default interface ContextInterface {
	depth			: number;
	order			: number;
	groupMessage?	: string;
	testMessage?	: string;
	tag				: string[];

	// callbacks
	beforeAll	: (() => void)[];
	beforeEach	: (() => void)[];
	afterAll	: (() => void)[];
	afterEach	: (() => void)[];
}