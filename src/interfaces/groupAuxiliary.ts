export default interface GroupAuxiliaryInterface {
	beforeAll	: (callback:() => void) => void;
	beforeEach	: (callback:() => void) => void;
	afterAll	: (callback:() => void) => void;
	afterEach	: (callback:() => void) => void;
}