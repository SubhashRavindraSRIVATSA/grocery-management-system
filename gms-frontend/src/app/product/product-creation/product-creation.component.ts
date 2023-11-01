import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit{

  product:Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe( data =>{
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products']);
  }
  
  onSubmit(){
    this.saveProduct();
  }

}
