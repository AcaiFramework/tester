// interfaces
import QueueInterface from "../interfaces/queue.ts";

// Utils
import { getContext } from "./context.ts";

// -------------------------------------------------
// Properties
// -------------------------------------------------

let groups: QueueInterface[] = [];

// -------------------------------------------------
// Methods
// -------------------------------------------------

export const getGroups = () => groups;

export const resetGroups = () => {
	groups = [];
}

export const addGroup = (group: () => void) => {
	const context = getContext();
	groups.push({context, cb: group});
}