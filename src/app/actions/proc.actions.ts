import { Proc } from '@app/_models';

export const LOAD_PROCS = 'LOAD_PROCS';
export const LOAD_PROCS_SUCCESS = 'LOAD_PROCS_SUCCESS';

export class LoadProcsAction {
    readonly type = LOAD_PROCS;
    constructor(){}
}

export class LoadProcsSuccessAction {
    readonly type = LOAD_PROCS_SUCCESS;
    constructor(public payload: Proc[]){}
}

export type Action
    = LoadProcsAction
    | LoadProcsSuccessAction