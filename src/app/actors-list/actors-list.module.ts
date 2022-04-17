import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorsListPageRoutingModule } from './actors-list-routing.module';

import { ActorsListPage } from './actors-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorsListPageRoutingModule,
  ],
  exports: [ActorsListPage],
  declarations: [ActorsListPage],
})
export class ActorsListPageModule {}
