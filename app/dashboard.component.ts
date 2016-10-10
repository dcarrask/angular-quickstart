import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Product } from './products/product';
import { ProductService } from './products/products.service';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

  heroes: Hero[] = [];
  products: Product[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));

    this.productService.getProducts()
      .then(products => this.products = products.slice(1,5));
      // .then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
