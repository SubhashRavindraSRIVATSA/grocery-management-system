import { inject } from "@angular/core";
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Category } from "../model/category";
import { CategoryService } from "../service/category.service";

export const CategoryResolver: ResolveFn<any> =
(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    categoryService: CategoryService = inject(CategoryService)): Observable<Category> => {
    const productId = route.paramMap.get("id");
    if (productId) {
        return categoryService.getCategory(Number(productId));
    } else {
        const product: Category = {
            id: 0,
            categoryName: ''
        }
        return of(product);
    }
}