import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecetaModule } from './receta/receta.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecetasListComponent } from './receta/recetas-list/recetas-list.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecetaModule,
    
    HttpClientModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
