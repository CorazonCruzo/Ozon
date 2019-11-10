import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { PricePipe } from './shared/pipes/price-pipe.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CheckAllBoxComponent } from './components/check-all-box/check-all-box.component';
import { DeleteSelectedBoxComponent } from './components/delete-selected-box/delete-selected-box.component';
import { PriceComponent } from './components/price/price.component';

@NgModule({
  declarations: [AppComponent, CatalogComponent, CartComponent, PricePipe, NavBarComponent, ProductListComponent, ProductItemComponent, CheckAllBoxComponent, DeleteSelectedBoxComponent, PriceComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
