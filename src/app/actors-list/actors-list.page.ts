import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Actor {
  constructor(
    public id: number,
    public name: string,
    public height: number,
    public mass: number,
    public gender: string,
    public homeworld: string,
    public wiki: string,
    public image: string,
    public born: number,
    public bornLocation: string,
    public died: number,
    public diedLocation,
    public species: string,
    public eyeColor: string,
    public hairColor: string,
    public skinColor: string,
    public cybernetics: string
  ) {}
}

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.page.html',
  styleUrls: ['./actors-list.page.scss'],
})
export class ActorsListPage implements OnInit {
  actors: Actor[];
  selectedActor?: Actor;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getActors();
  }

  getActors() {
    this.http
      .get<any[]>('https://akabab.github.io/starwars-api/api/all.json')
      .subscribe((response) => {
        console.log(response);

        this.actors = response.slice(0, 18);
      });
  }
}
