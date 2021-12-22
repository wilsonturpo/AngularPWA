import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url = "http://localhost:3000/personas"

  constructor(
    private http: HttpClient
  ) {
    
   }

   getPersonas(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    
    return this.http.get(this.url, {
      headers: header
    })

   }
}
