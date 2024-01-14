import { Component } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
deleteProduct(arg0: any) {
throw new Error('Method not implemented.');
}
updateEmployee(arg0: any) {
throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['id', 'categoryName', 'edit', 'delete']
  dataSource: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getCategoriesList().subscribe(
      {
        next: (res: Category[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

  updateCategory(id: number) :void{
    this.router.navigate(['category-creation', {id:id}]);
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getCategoryList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    )
  }
}
