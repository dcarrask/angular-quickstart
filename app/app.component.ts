import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  // template: `<h1>{{title}}</h1>
  //            <nav>
  //              <a routerLink="/dashboard">Dashboard</a>
  //              <a routerLink="/heroes">Heroes</a>
  //              <a routerLink="/products">Products</a>
  //            </nav>
  //            <router-outlet></router-outlet>`,
             // <a routerLink="/heroes">Heroes</a>
             // <br>
             // <my-heroes></my-heroes>
  // templateUrl: 'app.component.html',
  templateUrl: './app/app.component.html',
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
   title = 'Tour of heroes';
}
