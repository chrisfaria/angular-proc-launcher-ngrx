import * as procActions from './../actions/proc.actions'

export function procReducer(state = [], action: procActions.Action) {
    switch (action.type) {
        case procActions.LOAD_PROCS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}