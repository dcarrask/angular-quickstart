"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var products_mock_1 = require('./products.mock');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        // private productsUrl = 'app/products';
        // private productsUrl = 'app/products/products';
        this.productsUrl = 'products';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ProductsService.prototype.getProducts = function () {
        // return this.http.get(this.productsUrl)
        //            .toPromise()
        //            .then(response => response.json().data as Product[])
        //            .catch(this.handleError)
        // return this.http.get(this.productsUrl)
        //            .toPromise()
        //            .then(response => response.json().data as Product[])
        //            .catch(this.handleError)
        return Promise.resolve(products_mock_1.PRODUCTS);
    };
    ProductsService.prototype.getProductsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 5000);
        }) // delay 2 seconds
            .then(function () { return _this.getProducts(); });
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.getProducts()
            .then(function (products) { return products.find(function (product) { return product.id === id; }); });
    };
    ProductsService.prototype.update = function (product) {
        var url = this.productsUrl + "/" + product.id;
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(function () { return product; })
            .catch(this.handleError);
    };
    ProductsService.prototype.create = function (name) {
        return this.http
            .post(this.productsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ProductsService.prototype.delete = function (id) {
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProductsService.prototype.getProductsFiltered = function () {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(HEROES);
    };
    ProductsService.prototype.handleError = function (error) {
        debugger;
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProductsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map