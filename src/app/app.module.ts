import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcListComponent } from './proc-list/proc-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InMemoryDataService } from './_services/in-memory-data.service';
import { Proc1Component } from './procs/proc1/proc1.component';
import { Proc2Component } from './procs/proc2/proc2.component';
import { Proc3Component } from './procs/proc3/proc3.component';
import { Proc4Component } from './procs/proc4/proc4.component';
import { Proc5Component } from './procs/proc5/proc5.component';
import { Proc6Component } from './procs/proc6/proc6.component';
import { ProcListItemComponent } from './proc-list-item/proc-list-item.component';
import { procReducer } from './reducers/proc.reducer';
import { ProcCardsComponent } from './proc-cards/proc-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcListComponent,
    Proc1Component,
    Proc2Component,
    Proc3Component,
    Proc4Component,
    Proc5Component,
    Proc6Component,
    ProcListItemComponent,
    ProcCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 500 }),
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot({ procs: procReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
