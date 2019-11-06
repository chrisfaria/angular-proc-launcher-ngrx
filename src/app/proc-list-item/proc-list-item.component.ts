import { Component, OnInit, Input } from '@angular/core';
import { Proc } from '@app/_models';
import { ProcService } from '@app/_services';

@Component({
  selector: 'app-proc-list-item',
  templateUrl: './proc-list-item.component.html',
  styleUrls: ['./proc-list-item.component.scss']
})
export class ProcListItemComponent implements OnInit {

  @Input() proc: Proc;
  initialStatus = 'Not run yet';

  constructor(private procService: ProcService) { }

  ngOnInit() {
    this.proc.status = this.initialStatus;
    this.procService.currentMessage.subscribe(procResp => {
      if(procResp.id == this.proc.process)
      {
        this.proc.status = procResp.status;
      }
    });
  }

}
