"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var products_component_1 = require('./products/products.component');
var product_set_parent_component_1 = require('./products/product-set-parent.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes/detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'products',
        component: products_component_1.ProductsComponent
    },
    {
        path: 'products/set-parent',
        component: product_set_parent_component_1.ProductSetParentComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map