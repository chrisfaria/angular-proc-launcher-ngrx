import { Injectable } from '@angular/core'
import { ProcService } from '@app/_services';
import { Actions, Effect } from '@ngrx/effects'

@Injectable()
export class ProcEffects {
    constructor(
        private procService: ProcService,
        private actions$: Actions
    ) {}

    // @Effect() loadProcs$ = this.actions$
    //     .ofType(compan)
}