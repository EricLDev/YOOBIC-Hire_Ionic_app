import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../actors-list/actors-list.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'apps' },
    { title: 'Photos', url: '/folder/Photos', icon: 'image' },
    { title: 'Actors', url: '/folder/actors-list', icon: 'people' },
    { title: 'Films', url: '/folder/Films', icon: 'film' },
    { title: 'Starships', url: '/folder/Starships', icon: 'rocket' },
    { title: 'Chat', url: '/folder/Chat', icon: 'chatbox' },
  ];
  public folder: string;
  public actor: object;

  constructor(private activatedRoute: ActivatedRoute) {}

  setActor(actor: Actor) {
    this.actor = actor;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
