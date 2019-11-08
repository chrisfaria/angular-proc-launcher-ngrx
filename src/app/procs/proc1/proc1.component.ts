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
  loading: boolean = false;
  title = 'Process One';
  processKey = 'proc1';
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

    console.log(this.loading);
  }

  onSubmit()
  {
    this.loading = true;
    console.log(this.loading);
    this.procService.postProcess(this.processKey)
      .subscribe(
          data => {
              this.loading = false;
              console.log('test ' + this.loading);
          },
          error => {
              this.error = error;
              this.loading = false;
          });

    this.router.navigate(['/procs']);
  }
}
