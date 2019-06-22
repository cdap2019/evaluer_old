import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLandComponent } from './addLand.component';
// import { FormsComponent } from './forms.component';
// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';
// import { TabsComponent } from './tabs.component';
// import { CarouselsComponent } from './carousels.component';
// import { CollapsesComponent } from './collapses.component';
// import { PaginationsComponent } from './paginations.component';
// import {PopoversComponent} from './popovers.component';
// import {ProgressComponent} from './progress.component';
// import {TooltipsComponent} from './tooltips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Land'
    },
    children: [
      {
        path: '',
        redirectTo: 'land'
      },
      {
        path: 'addLand',
        component: AddLandComponent,
        data: {
          title: 'Add Land'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandRoutingModule {}
