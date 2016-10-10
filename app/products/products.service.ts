import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './products.mock';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService{

  // private productsUrl = 'app/products';
  // private productsUrl = 'app/products/products';
  private productsUrl = 'products';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http){}

  getProducts(): Promise<Product[]> {
    // return this.http.get(this.productsUrl)
    //            .toPromise()
    //            .then(response => response.json().data as Product[])
    //            .catch(this.handleError)
    // return this.http.get(this.productsUrl)
    //            .toPromise()
    //            .then(response => response.json().data as Product[])
    //            .catch(this.handleError)
    return Promise.resolve(PRODUCTS);
  }

  getProductsSlowly(): Promise<Product[]> {
    return new Promise<Product[]>(resolve =>
      setTimeout(resolve, 5000)) // delay 2 seconds
      .then(() => this.getProducts());
  }

  getProduct(id: number): Promise<Product>{
    return this.getProducts()
               .then(products => products.find(product => product.id === id));
  }

  update(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError)
  }

  create(name: string): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    debugger
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
