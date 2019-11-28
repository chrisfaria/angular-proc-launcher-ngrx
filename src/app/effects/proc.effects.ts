import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ProcService } from '@app/_services';
import * as procActions from './../actions/proc.actions';

@Injectable()
export class ProcEffects {

    // @Effect() loadProcs$ = this.actions$
    //     .ofType(compan)

    loadProcs$ = createEffect(() => this.actions$.pipe(
        ofType(procActions.LOAD_PROCS),
        mergeMap(() => this.procService.getProcs()
            .pipe(
                map(procs => ({ type: procActions.LOAD_PROCS_SUCCESS, payload: procs })),
                catchError(() => EMPTY)
            ))
    ));

    // loadMovies$ = createEffect(() => this.actions$.pipe(
    //     ofType('[Movies Page] Load Movies'),
    //     mergeMap(() => this.moviesService.getAll()
    //       .pipe(
    //         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
    //         catchError(() => EMPTY)
    //       ))
    //     )
    //   );

    constructor(
        private procService: ProcService,
        private actions$: Actions
    ) { }
}