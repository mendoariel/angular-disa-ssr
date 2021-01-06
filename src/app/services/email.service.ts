import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmailService {
  api = environment.api;

  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http: HttpClient) { }

  sendEmail(body) {
    const headers = { 'content-type': 'application/json'}  
    
    console.log(body);
    
    return this.http.post(this.api + "/send", body, this.options);
    // return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
}
