import { Component, OnInit, Input } from '@angular/core';
import { Proc } from '@app/_models';
import { ProcService } from '@app/_services';

// Dumb (presentational) component
@Component({
  selector: 'app-proc-cards',
  templateUrl: './proc-cards.component.html',
  styleUrls: ['./proc-cards.component.scss']
})
export class ProcCardsComponent implements OnInit {

  @Input() procs: Proc[];
  initialStatus = 'Not run yet';

  constructor(private procService: ProcService) { }

  ngOnInit() {
    // this.procs.status = this.initialStatus;
    // this.procService.currentMessage.subscribe(procResp => {
    //   if(procResp.id == this.procs.process)
    //   {
    //     this.procs.status = procResp.status;
    //   }
    // });
  }

}
