import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ActorsListPageModule } from '../actors-list/actors-list.module';
import { ActorDetailPageModule } from '../actor-detail/actor-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ActorsListPageModule,
    ActorDetailPageModule,
  ],
  declarations: [FolderPage],
})
export class FolderPageModule {}
