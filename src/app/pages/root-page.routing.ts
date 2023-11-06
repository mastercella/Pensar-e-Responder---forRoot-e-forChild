import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPageComponent } from './root-page.component';
import { Child1PageComponent } from './child1-page.component';
import { Child2PageComponent } from './child2-page.component';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: Child1PageComponent },
      { path: 'child2', component: Child2PageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootPageRoutingModule {}
