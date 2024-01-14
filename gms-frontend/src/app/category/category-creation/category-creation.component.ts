import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.css']
})
export class CategoryCreationComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  category: Category = {
    id: 0,
    categoryName: ''
  };

  ngOnInit(): void {
    this.category = this.activateRoute.snapshot.data['category'];
  }

  saveCategory(categoryForm: NgForm) {
    this.categoryService.saveCategory(this.category).subscribe(
      {
        next: (res: Category) => {
          console.log(res);
          categoryForm.reset();
          this.router.navigate(['products']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

}
