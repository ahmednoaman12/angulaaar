import { ParentComponent } from './components/order/parent/parent.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ChildComponent } from './components/order/child/child.component';
import { AllProductsComponent } from './components/connection laravel/all-products/all-products.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'home', component: ProductsComponent },
  { path: 'product', component: ParentComponent },
  { path: 'products', component: AllProductsComponent }
  // { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
