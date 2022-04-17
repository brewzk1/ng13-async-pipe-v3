import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   example1UserData: any[] = [];
   example1Sub: Subscription = new Subscription();

   example2UserData$: Observable<any[]> | undefined;

   constructor(private apiService: ApiService) {
      //if you comment the line below you should see the e.g.2 loading msg
      this.example2UserData$ = this.apiService.example2Data;
   }

   ngOnInit() {
      this.example1Sub = this.apiService.getUsers()
         .subscribe((res: any) => {
            //if you comment the line below you should see the e.g.1 loading msg
            this.example1UserData = res;
         });
   }

   ngOnDestroy() {
      this.example1Sub.unsubscribe();
   }
}
