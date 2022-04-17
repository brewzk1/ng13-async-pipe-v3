import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ApiService {

   constructor(private http: HttpClient) {
      this.example2Data = this.http.get<any[]>(this.url);
   }

   private url = 'https://jsonplaceholder.typicode.com/users';

   // example 2
   example2Data: Observable<any>;

   // example 1
   getUsers() {
      return this.http.get<any[]>(this.url);
   }
}
