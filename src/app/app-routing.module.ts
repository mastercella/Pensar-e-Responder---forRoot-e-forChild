import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageModule } from './pages/root-page.module';

const routes: Routes = [
  { path: 'root', loadChildren: () => RootPageModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
