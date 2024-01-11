import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "../service/product.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../model/product";

export const ProductResolver: ResolveFn<any> =
(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    productService: ProductService = inject(ProductService)): Observable<Product> => {
    const productId = route.paramMap.get("id");
    if (productId) {
        return productService.getProduct(Number(productId));
    } else {
        const product: Product = {
            id: 0,
            productName: '',
            productValue: 0,
            quantityUnit: ''
        }
        return of(product);
    }
}