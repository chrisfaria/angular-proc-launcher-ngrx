import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


import { Proc } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class ProcService {

  private messageSource: BehaviorSubject<string>;
  //private messageSource = new BehaviorSubject('default message');
  public currentMessage: Observable<string>;
  //currentMessage = this.messageSource.asObservable();

  private procsUrl = 'api/procs';  // URL to web api

  constructor(private http: HttpClient) {
    this.messageSource = new BehaviorSubject<string>(localStorage.getItem('currentMessage'));
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
    return this.http.get<Proc[]>(this.procsUrl).pipe(delay(50));
  }

  postProcess(url: string, params)
  {
    return this.http.post(url, params).pipe(delay(50));
  }

  changeMessage(message: string) {
    localStorage.setItem('currentMessage', JSON.stringify(message));
    this.messageSource.next(message)
  }
}
