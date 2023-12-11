import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  searchText='';
  products!: Product[];
  constructor(
    private productService: ProductService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.getProducts();
  }
  
  private getProducts() {
     this.productService.getProductsList().subscribe( data =>{
      this.products = data;
    })
  }

  productDetails(id: number){
    this.router.navigate(['product-details', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['product-update', id]);
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }

  createProduct() {
    this.router.navigate(['create-product']);
  }

}
