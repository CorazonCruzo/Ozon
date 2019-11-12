import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CheckAllBoxComponent } from './components/check-all-box/check-all-box.component';
import { DeleteSelectedBoxComponent } from './components/delete-selected-box/delete-selected-box.component';
import { PriceComponent } from './components/price/price.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [AppComponent, CatalogComponent, CartComponent, NavBarComponent, ProductItemComponent, CheckAllBoxComponent, DeleteSelectedBoxComponent, PriceComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StorageServiceModule, StarRatingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
