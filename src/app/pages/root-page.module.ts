import { NgModule } from '@angular/core';
import { RootPageComponent } from './root-page.component';
import { Child1PageComponent } from './child1-page.component';
import { Child2PageComponent } from './child2-page.component';
import { RootPageRoutingModule } from './root-page.routing';

@NgModule({
  declarations: [
    RootPageComponent,
    Child1PageComponent,
    Child2PageComponent
  ],
  imports: [
    RootPageRoutingModule,
  ],
  exports: [
  ],
  providers: []
})

export class RootPageModule { }
