import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from './products.service';

import { Product } from './product';

@Component({
  moduleId: module.id,
  selector: 'product-set-parent',
  templateUrl: 'product-set-parent.component.html',
  // styleUrls: [ 'product-set-parent.component.css' ]
})

export class ProductSetParentComponent implements OnInit {

  product: Product;
  products: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  // ngOnInit(): void{
  //   this.route.params.forEach((params: Params) => {
  //     let id = +params['id']
  //     this.heroService.getHero(id)
  //       .then(hero => this.hero = hero);
  //   });
  // }

  // goBack(): void {
  //   this.location.back();
  // }

  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(() => this.goBack());
  // }

}
