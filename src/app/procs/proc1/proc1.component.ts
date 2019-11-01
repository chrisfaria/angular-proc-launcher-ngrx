import { Component, OnInit } from '@angular/core';
//import { Router, NavigationStart } from '@angular/router';
//import { Observable } from 'rxjs';
//import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-proc1',
  templateUrl: './proc1.component.html',
  styleUrls: ['./proc1.component.scss']
})
export class Proc1Component implements OnInit {

  //@Input() proc: Proc;
  title: any = 'Process One';
  //private state$: Observable<object>;

  constructor() { }

  ngOnInit() {
    // // Get NavigationStart events
    // this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
    //   const navigation = this.router.getCurrentNavigation();
    //   console.log({id: navigation.extras.state.tracingId});
    // });
  }
}
