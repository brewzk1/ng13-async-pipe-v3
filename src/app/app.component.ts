import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   example1userData: any[] = [];
   example1Sub: Subscription = new Subscription();

   constructor(private apiService: ApiService) { }

   ngOnInit() {
      this.example1Sub = this.apiService.getUsers()
         .subscribe((res: any) => {
            this.example1userData = res;
         });
   }

   ngOnDestroy() {
      this.example1Sub.unsubscribe();
   }
}
