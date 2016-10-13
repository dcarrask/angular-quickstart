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
var products_service_1 = require('./products.service');
var http_1 = require('@angular/http');
var ProductSetParentComponent = (function () {
    function ProductSetParentComponent(http, productsService) {
        this.http = http;
        this.productsService = productsService;
    }
    ProductSetParentComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductSetParentComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductSetParentComponent.prototype.valuechange = function (newValue) {
        this.mymodel = newValue;
        console.log(newValue);
        // this.productsService.getProductsFiltered().then(products => this.filtered = products);
        // console.log("filtered: " + this.filtered);
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    ProductSetParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-set-parent',
            templateUrl: 'product-set-parent.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, products_service_1.ProductsService])
    ], ProductSetParentComponent);
    return ProductSetParentComponent;
}());
exports.ProductSetParentComponent = ProductSetParentComponent;
//# sourceMappingURL=product-set-parent.component.js.map