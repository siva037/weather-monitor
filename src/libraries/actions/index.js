/*
    Create a Flux Standard Actions.
*/
export function createAction(type, error, payload, meta) {
    return { type, error, payload, meta };
}
