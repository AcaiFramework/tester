export const repeat = (text: string, times: number) => {
	let response = "";

	for (let i = 0; i < (times > 0 ? times:0); i++) {
		response += text;
	}

	return response;
}