import { Component, OnInit } from '@angular/core';
import { ProcService } from '@app/_services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proc4',
  templateUrl: './proc4.component.html',
  styleUrls: ['./proc4.component.scss']
})
export class Proc4Component implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  title = 'Process Four';
  processKey = 'proc4';
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
