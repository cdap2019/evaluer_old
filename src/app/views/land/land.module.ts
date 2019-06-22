// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddLandComponent } from './addLand.component';

// Components Routing
import { LandRoutingModule } from './land-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LandRoutingModule
  ],
  declarations: [
    AddLandComponent
  ]
})
export class LandModule { }
