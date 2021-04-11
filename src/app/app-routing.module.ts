import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from 'src/core/components/all-products/all-products.component';
import { HomeComponent } from 'src/core/components/home/home.component';
import { ProductDetailComponent } from 'src/core/components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product-list', component: AllProductsComponent },
  { path: 'product-list/:id', component: ProductDetailComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
