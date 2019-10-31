import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcListComponent } from './proc-list';
import { Proc1Component, Proc2Component, Proc3Component, Proc4Component, Proc5Component, Proc6Component } from './procs';


const routes: Routes = [
  { path: 'procs', component: ProcListComponent },
  { path: 'procs/proc1', component: Proc1Component },
  { path: 'procs/proc2', component: Proc2Component },
  { path: 'procs/proc3', component: Proc3Component },
  { path: 'procs/proc4', component: Proc4Component },
  { path: 'procs/proc5', component: Proc5Component },
  { path: 'procs/proc6', component: Proc6Component },
  { path: '', redirectTo: '/procs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
