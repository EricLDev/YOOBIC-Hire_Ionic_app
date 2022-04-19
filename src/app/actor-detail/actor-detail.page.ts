import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../actors-list/actors-list.page';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.page.html',
  styleUrls: ['./actor-detail.page.scss'],
})
export class ActorDetailPage implements OnInit {
  actor?: Actor;
  public actorId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.actorId = this.activatedRoute.snapshot.paramMap.get('actorId');
    this.getActor(this.actorId);
  }

  getActor(actorId) {
    this.http
      .get<any>(`https://akabab.github.io/starwars-api/api/id/${actorId}.json`)
      .subscribe((response) => {
        this.actor = response;
      });
  }
}
