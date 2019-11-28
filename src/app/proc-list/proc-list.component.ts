import { Component, OnInit } from '@angular/core';
import { Proc } from '@app/_models';
import { ProcService } from '@app/_services';
import { Store } from '@ngrx/store';
import { AppState } from '@app/_models/app-state';
import { Observable } from 'rxjs';
import { stat } from 'fs';
import * as procActions from './../actions/proc.actions'

// Smart Component (container in React) component
@Component({
  selector: 'app-proc-list',
  templateUrl: './proc-list.component.html',
  styleUrls: ['./proc-list.component.scss']
})
export class ProcListComponent implements OnInit {

  procs$: Observable<Proc[]>;

  constructor(/*private procService: ProcService*/ private store: Store<AppState>) {
    this.procs$ = this.store.select(state => state.procs);
  }

  ngOnInit() {
    this.getProcs();
  }

  getProcs() {
    //this.procs$ = this.procService.getProcs();//.subscribe(procs => this.procs = procs);
    this.store.dispatch(new procActions.LoadProcsAction())
  }
}
