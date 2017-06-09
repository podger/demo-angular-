import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
// import { AlertModule } from 'ngx-bootstrap';
import { NetService } from "./services/net.service";

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NumericInputComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
