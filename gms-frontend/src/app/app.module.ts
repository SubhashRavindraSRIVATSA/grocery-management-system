import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './utils/search.pipe';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreationComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    SearchPipe,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
