import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page.component';

const routes = [
  { path: "", component: LazyPageComponent, pathMatch: "full" }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  declarations: [LazyPageComponent]
})
export class LazyPageModule {
  static routes = routes;
}
