import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'apps' },
    { title: 'Photos', url: '/folder/Photos', icon: 'image' },
    { title: 'Actors', url: '/folder/actors-list', icon: 'people' },
    { title: 'Films', url: '/folder/Films', icon: 'film' },
    { title: 'Starships', url: '/folder/Starships', icon: 'rocket' },
    { title: 'Chat', url: '/folder/Chat', icon: 'chatbox' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel'];
  constructor() {}
}
