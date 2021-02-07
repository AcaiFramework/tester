// interfaces
import QueueInterface from "../interfaces/queue";

// Utils
import { getContext } from "./context";

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