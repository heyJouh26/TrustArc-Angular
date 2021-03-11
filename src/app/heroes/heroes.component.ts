import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero?: Hero;
  // heroes = HEROES;
  heroes: Hero[] = [];


  constructor( private heroService: HeroService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getHeroes();
  }

    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
    // }

  getHeroes(): void {
    this.heroService.getHeroes()
        // tslint:disable-next-line: deprecation
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      // tslint:disable-next-line: deprecation
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    // tslint:disable-next-line: deprecation
    this.heroService.deleteHero(hero).subscribe();
  }
}

// function subscribe(arg0: (hero: any) => void) {
//   throw new Error('Function not implemented.');
// }

