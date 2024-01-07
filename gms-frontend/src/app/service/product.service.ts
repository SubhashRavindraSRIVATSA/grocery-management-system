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

  getProductsList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }
}
