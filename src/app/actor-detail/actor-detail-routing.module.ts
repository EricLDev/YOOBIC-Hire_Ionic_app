import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorDetailPage } from './actor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorDetailPageRoutingModule {}
