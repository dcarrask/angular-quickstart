import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductsService } from './products.service';

import { Product } from './product';

import { Headers, Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'product-set-parent',
  templateUrl: 'product-set-parent.component.html',
  // styleUrls: [ 'product-set-parent.component.css' ]
})

export class ProductSetParentComponent implements OnInit {

  product: Product;
  products: Product[];
  filtered: Product[];
  mymodel: String;

  constructor(
    private http: Http,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().then(products => this.products = products);
  }

  valuechange(newValue): void {
    this.mymodel = newValue;
    console.log(newValue);
    // this.productsService.getProductsFiltered().then(products => this.filtered = products);
    // console.log("filtered: " + this.filtered);
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  // getHeroes(): void {
  // }




  // ngOnInit(): void{
  //   this.route.params.forEach((params: Params) => {
  //     let id = +params['id']
  //     this.productService.getProduct(id)
  //       .then(product => this.product = product);
  //   });
  // }

  // goBack(): void {
  //   this.location.back();
  // }

  // save(): void {
  //   this.productService.update(this.product)
  //     .then(() => this.goBack());
  // }

}
