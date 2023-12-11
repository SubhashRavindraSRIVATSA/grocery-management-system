import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories!: Category[];
  constructor (
    private categoryService: CategoryService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.categoryService.getCategoryList().subscribe( data =>{
      this.categories = data
    })
  }

  createCategory() {
    this.router.navigate(['create-category']);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe( data => {
      console.log(data);
      this.getCategories();
    })
  }
    
  updateCategory(id: number) { 
    this.router.navigate(['category-update',id]);
  }

}
