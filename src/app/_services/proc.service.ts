import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay, map, filter } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


import { Proc, ProcResp } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class ProcService {

  private messageSource: BehaviorSubject<ProcResp>;
  //private messageSource = new BehaviorSubject('default message');
  public currentMessage: Observable<ProcResp>;
  //currentMessage = this.messageSource.asObservable();

  private procsUrl = 'api';  // URL to web api

  constructor(private http: HttpClient) {
    this.messageSource = new BehaviorSubject<ProcResp>(null);//JSON.parse(localStorage.getItem('currentMessage')));
    this.currentMessage = this.messageSource.asObservable();
  }

  // not good, synchronous
  // getProcs(): Proc[] {
  //   return PROCS;
  // }

  // getProcs(): Observable<Proc[]> {
  //   return of(PROCS);
  // }

  /** GET procs from the server */
  getProcs (): Observable<Proc[]> 
  {
    return this.http.get<Proc[]>(this.procsUrl + '/procs').pipe(
      delay(50)/*,
      map(resp => {
        console.log('test1');
        console.log(resp.filter(x => x.process == 'proc1'));
        //localStorage.setItem('currentMessage', JSON.stringify(resp));
        //this.messageSource.next(resp);
        console.log('test2');
        return resp;
      })*/);
  }

  postProcess(procID: string): Observable<ProcResp> 
  {
    const messageKey = 'status-'+procID;
    const loadingStatus = { id: procID, status: 'Processing...' };
    this.changeMessage(messageKey,loadingStatus);

    return this.http.get<ProcResp>(this.procsUrl + '/' + procID).pipe(
      delay(5000),
      //filter((resp: Proc[]) => resp.process == param),
      map((resp: ProcResp) => {
        console.log('test1');
        console.log(resp);
        this.changeMessage(messageKey, resp);
        //resp.filter(x => x.process == param)
        
        //localStorage.setItem('currentMessage', JSON.stringify(resp));
        //this.messageSource.next(resp);
        console.log('test2');
        return resp;
      }));
  }

  changeMessage(messageKey: string, proc: ProcResp) {
    localStorage.setItem(messageKey, JSON.stringify(proc));
    this.messageSource.next(proc)
  }
}
