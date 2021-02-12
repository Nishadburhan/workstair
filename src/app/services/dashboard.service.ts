import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

   // Private properties :start
    apiUrl:string ='https://jsonplaceholder.typicode.com';
   // Private properties :end
   // REST METHODS :start

     // GET
      get() {
        return this.http.get(this.apiUrl+'/users');
      }
     // POST

     // PUT

     // DELETE
     
   // REST METHODS :end

   // Custom Methods :start

   // Custom Methods :end
}
