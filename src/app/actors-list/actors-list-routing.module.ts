import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsListPage } from './actors-list.page';

const routes: Routes = [
  {
    path: '',
    component: ActorsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsListPageRoutingModule {}
