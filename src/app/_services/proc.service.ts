import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Proc } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class ProcService {

  private procsUrl = 'api/procs';  // URL to web api

  constructor(private http: HttpClient) { }

  // not good, synchronous
  // getProcs(): Proc[] {
  //   return PROCS;
  // }

  // getHeroes(): Observable<Proc[]> {
  //   return of(PROCS);
  // }

  /** GET heroes from the server */
  getHeroes (): Observable<Proc[]> {
    return this.http.get<Proc[]>(this.procsUrl)
  }
}
