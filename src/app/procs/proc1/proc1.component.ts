import { Component, OnInit } from '@angular/core';
import { ProcService } from '@app/_services';
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
  message: string = 'Hello hello';

  constructor(private procService: ProcService) { }

  ngOnInit() {
    // // Get NavigationStart events
    // this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
    //   const navigation = this.router.getCurrentNavigation();
    //   console.log({id: navigation.extras.state.tracingId});
    // });
  }

  onSubmit()
  {
    
    console.log('process started');
    this.procService.changeMessage(this.message);
    //this.procService.postProcess('api/procreq','');
  }
}
