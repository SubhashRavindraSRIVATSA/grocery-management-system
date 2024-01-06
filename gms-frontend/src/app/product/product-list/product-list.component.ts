import { Component } from '@angular/core';

export interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: UserData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Alice Smith', email: 'alice@example.com', phone: '987-654-3210' },
    // Add more data as needed
  ];
}
