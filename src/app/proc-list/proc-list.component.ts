import { Component, OnInit } from '@angular/core';
import { Proc } from '@app/_models';
import { ProcService } from '@app/_services';

@Component({
  selector: 'app-proc-list',
  templateUrl: './proc-list.component.html',
  styleUrls: ['./proc-list.component.scss']
})
export class ProcListComponent implements OnInit {

  procs: Proc[];
  message: string;

  constructor(private procService: ProcService) { }

  ngOnInit() {
    
    this.getProcs();
    this.procService.currentMessage.subscribe(message => this.message = message)
  }

  // not good, synchronous
  // getProcs(): void {
  //   this.procs = this.procService.getProcs();
  // }

  getProcs() {
    this.procService.getProcs()
      .subscribe(procs => this.procs = procs);
  }

  getStatus() {
    
  }

}
