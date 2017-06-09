import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
// import { AlertModule } from 'ngx-bootstrap';
import { NetService } from "./services/net.service";
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent  },
  { path: 'form', component: FormComponent  },
  { path: 'detail/:id', loadChildren: "./pages/lazy-page/lazy-page.module#LazyPageModule"   },
  { path: '**',   redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NumericInputComponent,
    HomeComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    // AlertModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    NetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
