import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcListComponent } from './proc-list/proc-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { InMemoryDataService } from './_services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProcListComponent,
    ProdCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 3000 }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
