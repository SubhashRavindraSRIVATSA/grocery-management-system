import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/gms/product" ;

  constructor(
    private httpClient: HttpClient
  ) { }

  public saveProduct(product: Product): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  public getProductsList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  public getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  public updateProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }
  public deleteProduct(id: number) {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
