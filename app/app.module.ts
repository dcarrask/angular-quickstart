import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { ProductsComponent }         from './products/products.component';
import { ProductSetParentComponent } from './products/product-set-parent.component';
import { ProductsService }           from './products/products.service';

import { DashboardComponent }        from './dashboard.component';

import { WikiComponent }             from './wiki/wiki.component';
import { WikiSmartComponent }        from './wiki/wiki-smart.component';
// import { WikipediaService }          from './wiki/wikipedia.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              JsonpModule,
              InMemoryWebApiModule.forRoot(InMemoryDataService),
              routing
           ],
  declarations: [
                  AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  ProductsComponent,
                  ProductSetParentComponent,
                  DashboardComponent,
                  WikiComponent,
                  WikiSmartComponent
                ],
  providers: [
                HeroService,
                ProductsService
             ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
