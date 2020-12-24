export const repeat = (text: string, times: number) => {
	let response = "";

	for (let i = 0; i < times; i++) {
		response += text;
	}

	return response;
}