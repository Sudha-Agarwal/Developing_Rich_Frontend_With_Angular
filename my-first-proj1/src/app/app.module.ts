import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './_components/bindings/bindings.component';
import { ProductsListComponent } from './_components/products-list/products-list.component';
import { ProductDetailComponent } from './_components/product-detail/product-detail.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelFormComponent } from './_components/model-form/model-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './_components/observable/observable.component';
import { ParentComponent } from './_components/parent/parent.component';
import { ChildComponent } from './_components/child/child.component';
import { EditProductComponent } from './_components/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ProductsListComponent,
    ProductDetailComponent,
    LoginFormComponent,
    ModelFormComponent,
    ObservableComponent,
    ParentComponent,
    ChildComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
