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

  constructor(private procService: ProcService) { }

  ngOnInit() {
    this.procService.currentMessage.subscribe(procResp => this.proc.status = procResp.status);
  }

}
