import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './products.service';

@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: [ 'products.component.css' ]
  // template: `<h1>{{title}}</h1>
  // template: `
})

export class ProductsComponent implements OnInit{
  products: Product[];
  selectedProduct: Product;

  constructor(
    private router: Router,
    private productService: ProductService){}

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id])
  }

  add(name: string): void {
    name = name.trim();
    if(!name){ return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      })
  }

  delete(product: Product): void {
    this.productService
      .delete(product.id.toLocaleString())
      .then(() => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product){ this.selectedProduct = null; }
      })
  }

}
