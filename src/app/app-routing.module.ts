import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: 'welcome', component:WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'CustomerGrid', loadChildren: './grid/grid.module#GridModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
