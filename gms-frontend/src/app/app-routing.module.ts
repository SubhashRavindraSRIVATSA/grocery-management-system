import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

const routes: Routes = [
  {path: 'products', component:ProductListComponent },
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'create-product', component: ProductCreationComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
