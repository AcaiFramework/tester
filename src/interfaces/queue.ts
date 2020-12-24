// Interfaces
import ContextInterface from "./context.ts";

export default interface QueueInterface {
	context: ContextInterface;
	cb: () => void;
}