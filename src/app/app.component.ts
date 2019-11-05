import { Component } from '@angular/core';
import { ProcService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Proc Launcher (RxJS)';

  constructor(private procService: ProcService){}

  ngOnInit() {
    //this.procService.currentMessage.subscribe(message => this.title = message);
  }
}
