import { Component, OnInit } from '@angular/core';
import { ProcService } from '@app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Router, NavigationStart } from '@angular/router';
//import { Observable } from 'rxjs';
//import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-proc1',
  templateUrl: './proc1.component.html',
  styleUrls: ['./proc1.component.scss']
})
export class Proc1Component implements OnInit {

  loginForm: FormGroup;
  //@Input() proc: Proc;
  title: any = 'Process One';
  //private state$: Observable<object>;
  message: string = 'Hello hello 1234';
  error = '';

  constructor(private procService: ProcService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // // Get NavigationStart events
    // this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
    //   const navigation = this.router.getCurrentNavigation();
    //   console.log({id: navigation.extras.state.tracingId});
    // });

    this.loginForm = this.formBuilder.group({
      inputParam: ['', Validators.required],
      inputDuration: ['', Validators.required],
      gridRadios1: [''],
      gridRadios2: [''],
      gridRadios3: [''],
      gridCheck1: ['']
  });
  }

  onSubmit()
  {
    
    console.log('process started');

    this.procService.postProcess('api/procreq','')
      .subscribe(
          data => {
              
          },
          error => {
              this.error = error;
              //this.loading = false;
          });

    this.router.navigate(['/procs']);

    //this.procService.changeMessage(this.message);

    // this.procService.postProcess('api/procreq','')
    //   .pipe(first())
    //   .subscribe(
    //       data => {
    //           this.router.navigate(['/procs']);
    //       },
    //       error => {
    //           this.error = error;
    //           //this.loading = false;
    //       });
  }
}
