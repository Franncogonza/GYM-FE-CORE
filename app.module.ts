import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/core/shared/navbar/navbar.component';

import { AppRoutingModule } from './src/app/app-routing.module';
import { AppComponent } from './src/app/app.component';
import { FooterComponent } from './src/core/components/footer/footer.component';
import { HomeComponent } from './src/core/components/home/home.component';
import { LoaderSpinnerComponent } from './src/core/shared/loader-spinner/loader-spinner.component';
import { AllProductsComponent } from './src/core/components/all-products/all-products.component';
import { ProductDetailComponent } from './src/core/components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoaderSpinnerComponent,
    AllProductsComponent,
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
