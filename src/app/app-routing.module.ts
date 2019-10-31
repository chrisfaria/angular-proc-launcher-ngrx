import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcListComponent } from './proc-list';


const routes: Routes = [
  { path: '', redirectTo: '/procs', pathMatch: 'full' },
  { path: 'procs', component: ProcListComponent }
  { path: 'procs', component: ProcListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
