import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!: number 
  product!: Product

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.product = new Product();
    this.productService.getProducteById({ id: this.id }).subscribe(data =>{
      this.product = data
      console.log(data)
    })
  }

  backToList() {
    this.router.navigate(['products']);
  }
  
}
