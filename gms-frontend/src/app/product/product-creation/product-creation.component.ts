import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
interface QuantityUnit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute:ActivatedRoute
  ) { }

  product:Product = {
    id: 0,
    productName: '',
    productValue: 0,
    quantityUnit: ''
  };

  ngOnInit(): void {
    this.product = this.activateRoute.snapshot.data['product'];
    console.log(this.product);
  }
  quantityUnit: QuantityUnit[] = [
    {value: 'qu-0', viewValue: 'KG'},
    {value: 'qu-1', viewValue: 'LITRES'},
    {value: 'qu-2', viewValue: 'UNITS'},
  ];

  saveProduct(productForm: NgForm) : void{
    this.productService.saveProduct(this.product).subscribe(
      {
        next: (res:Product) => {
          console.log(res);
          productForm.reset();
          this.router.navigate(['products']);
        },
        error: (err:HttpErrorResponse) =>{
          console.log(err);
        } 
      }
    )
  }
    
}
