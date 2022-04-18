import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../actors-list/actors-list.page';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.page.html',
  styleUrls: ['./actor-detail.page.scss'],
})
export class ActorDetailPage implements OnInit {
  @Input() actor?: Actor;
  constructor() {}

  ngOnInit() {}
}
