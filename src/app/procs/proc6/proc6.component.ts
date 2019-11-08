import { Component, OnInit } from '@angular/core';
import { ProcService } from '@app/_services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proc6',
  templateUrl: './proc6.component.html',
  styleUrls: ['./proc6.component.scss']
})
export class Proc6Component implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  title = 'Process Six';
  processKey = 'proc6';
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
