import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = "http://localhost:8080/gms/category" ;

  constructor(
    private httpClient: HttpClient
  ) { }

  public saveCategory(category: Category): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, category);
  }

  public getCategoriesList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  public getCategory(id: number) {
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }

  public updateCategory(id: number, category: Category): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, category);
  }
  
  public deleteCategory(id: number) {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
