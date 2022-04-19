import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  currentRoute: string;
  constructor(private router: Router) {
    console.log(router.url);
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log(event);
      });
  }
}
