import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { ProductsComponent } from './products/products.component';
import { ProductSetParentComponent } from './products/product-set-parent.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes/detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/set-parent',
    component: ProductSetParentComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
