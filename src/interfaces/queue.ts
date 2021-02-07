// Interfaces
import ContextInterface from "./context";

export default interface QueueInterface {
	context: ContextInterface;
	cb: () => void;
}