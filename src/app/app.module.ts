import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BodyComponent } from './components/body/body.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule  } from '@angular/forms';
import { ParentComponent } from './components/order/parent/parent.component';
import { ChildComponent } from './components/order/child/child.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './components/connection laravel/all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    BodyComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    ProductDetailsComponent,
    AllProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//ReactiveFormsModule ,, HttpClientModule
