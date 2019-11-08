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
  public currentMessage: Observable<ProcResp>;

  private procsUrl = 'api';  // URL to web api
  private procRespInit : ProcResp = { id: '', status: '' };

  constructor(private http: HttpClient) {
    this.messageSource = new BehaviorSubject<ProcResp>(this.procRespInit);
    this.currentMessage = this.messageSource.asObservable();
  }

  /** GET procs from the server */
  getProcs (): Observable<Proc[]> 
  {
    return this.http.get<Proc[]>(this.procsUrl + '/procs');
  }

  postProcess(procID: string): Observable<ProcResp> 
  {
    const messageKey = 'status-'+procID;
    const loadingStatus = { id: procID, status: 'Processing...' };
    this.changeMessage(messageKey,loadingStatus);

    return this.http.get<ProcResp>(this.procsUrl + '/' + procID).pipe(
      delay(15000),
      map((resp: ProcResp) => {
        this.changeMessage(messageKey, resp);
        return resp;
      }));
  }

  changeMessage(messageKey: string, procResp: ProcResp) {
    localStorage.setItem(messageKey, JSON.stringify(procResp));
    this.messageSource.next(procResp)
  }
}
