import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', redirectTo: '/catalog'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
