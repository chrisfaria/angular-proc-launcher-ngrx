import { Component, OnInit } from '@angular/core';
import { ProcService } from '@app/_services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proc2',
  templateUrl: './proc2.component.html',
  styleUrls: ['./proc2.component.scss']
})
export class Proc2Component implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  title = 'Process Two';
  processKey = 'proc2';
  error = '';

  constructor(private procService: ProcService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
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
