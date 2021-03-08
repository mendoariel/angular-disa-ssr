import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.api;
  url1 = environment.apiDisaSale;

  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http: HttpClient) { }

   

  getSales(): Observable<any> {

    return this.http
      .get<any>(
        `${this.url}/sales`,
      );  
  } 

  getProducts(): Observable<any> {
    return this.http
      .get<any>(
        `${this.url1}/productos`,
      );  
  } 
}
