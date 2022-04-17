import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ApiService {

   constructor(private http: HttpClient) { }

   private url = 'https://jsonplaceholder.typicode.com/users';
   private usersData: any[] = [];

   // example 1
   getUsers() {
      return this.http.get<any[]>(this.url);
   }
}
