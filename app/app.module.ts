import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { ProductsComponent }   from './products/products.component';
import { ProductSetParentComponent } from './products/product-set-parent.component';
import { ProductService }      from './products/products.service';

import { DashboardComponent }  from './dashboard.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              InMemoryWebApiModule.forRoot(InMemoryDataService),
              routing
           ],
  declarations: [
                  AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  ProductsComponent,
                  ProductSetParentComponent,
                  DashboardComponent
                ],
  providers: [
                HeroService,
                ProductService
             ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
