import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//additional plugins
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { FormGroup, FormBuilder } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,/*add this connect to JSON REST-API*/
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    SQLite,
    SQLitePorter,/*additional for sqlite & json encoder*/
    /*ZBar, /*QRCode using ZBar plugins*/
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
