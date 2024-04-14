import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './_components/bindings/bindings.component';
import { ProductsListComponent } from './_components/products-list/products-list.component';
import { ProductDetailComponent } from './_components/product-detail/product-detail.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ProductsListComponent,
    ProductDetailComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
