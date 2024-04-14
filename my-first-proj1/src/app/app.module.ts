import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './_components/bindings/bindings.component';
import { ProductsListComponent } from './_components/products-list/products-list.component';
import { ProductDetailComponent } from './_components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ProductsListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
