import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  id!:number;
  product:Product = new Product();

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProducteById(this.id).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products']);
  }

  backToList() {
    this.router.navigate(['products']);
  }

}
