import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcListComponent } from './proc-list/proc-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProdCardComponent } from './prod-card/prod-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcListComponent,
    ProdCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
