import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.css']
})
export class CategoryCreationComponent implements OnInit{

  category:Category = new Category();
  
  ngOnInit(): void {  }

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  saveCategory(){
    this.categoryService.createCategory(this.category).subscribe( data =>{
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/categories']);
  }

  onSubmit(){
    this.saveCategory();
  }

}
