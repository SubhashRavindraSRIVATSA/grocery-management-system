import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductResolver } from './product/product-resolver';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'product-creation', component: ProductCreationComponent, resolve: {product:ProductResolver} },
  { path: 'categories', component: CategoryListComponent},
  { path: 'category-creation', component: CategoryCreationComponent, resolve: {product:ProductResolver} },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
