import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';


@Injectable({
   providedIn: 'root'
})
export class ApiService {

   constructor(private http: HttpClient) {
      // example 2
      this.getUsers()
   }

   private url = 'https://jsonplaceholder.typicode.com/users';

   // example 2
   example2Data: Observable<any> | undefined;

   // for examples 1 and 2.
   // data is returned after a 2 sec. delay.
   getUsers() {
      this.example2Data = this.http
         .get<any[]>(this.url)
         .pipe(delay(2000));
      return this.example2Data;
   }
}
