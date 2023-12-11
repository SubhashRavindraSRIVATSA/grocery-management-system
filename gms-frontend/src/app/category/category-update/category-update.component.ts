import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit{


  id!:number;
  category:Category = new Category();

  constructor(
    private route:ActivatedRoute,
    private categoryService:CategoryService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategoryById({id: this.id}).subscribe(data =>{
      this.category = data;
    }, error => console.log(error));
  }


  onSubmit() {
    this.categoryService.updateCategory(this.id, this.category).subscribe( data =>{
      this.goToCategoryList();
    }
    , error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/categories']);
  }

  backToList() {
    this.router.navigate(['categories']);
  }

}
