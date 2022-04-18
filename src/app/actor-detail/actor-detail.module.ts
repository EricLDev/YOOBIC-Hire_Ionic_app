import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorDetailPageRoutingModule } from './actor-detail-routing.module';

import { ActorDetailPage } from './actor-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorDetailPageRoutingModule,
  ],
  exports: [ActorDetailPage],

  declarations: [ActorDetailPage],
})
export class ActorDetailPageModule {}
