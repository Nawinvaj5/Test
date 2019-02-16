import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersData() {

    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      response => response
    );

  }

}

