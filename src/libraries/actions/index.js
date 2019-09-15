/*
    Create a Flux Standard Actions.
*/
export function createAction(type, error, payload, meta) {
	console.log("action created");
    return { type, error, payload, meta };
}
