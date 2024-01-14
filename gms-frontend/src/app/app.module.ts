import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product/product-list/product-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    ProductCreationComponent,
    CategoryListComponent,
    CategoryCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule, 
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
