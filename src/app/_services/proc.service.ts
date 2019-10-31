import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Proc } from '@app/_models';
import { PROCS } from './mock-procs';

@Injectable({
  providedIn: 'root'
})
export class ProcService {

  constructor() { }

  // not good, synchronous
  // getProcs(): Proc[] {
  //   return PROCS;
  // }

  getHeroes(): Observable<Proc[]> {
    return of(PROCS);
  }
}
