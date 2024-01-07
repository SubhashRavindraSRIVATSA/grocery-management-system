import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'productValue', 'updatedAt','quantityUnit'];
  dataSource: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.getProductList();
  }
  
  getProductList():void {
    this.productService.getProductsList().subscribe(
      {
        next:(res:Product[]) =>{
          this.dataSource = res;
        },
        error: (err:HttpErrorResponse) =>{
          console.log(err);
        }
      }
    );
  }

}
