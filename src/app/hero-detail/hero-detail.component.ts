import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService)
     { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    this.heroService.getHero(parseInt(id || '-1'))
      // tslint:disable-next-line: deprecation
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void{
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero )
      // tslint:disable-next-line: deprecation
      .subscribe(() => this.goBack());
  }



}
