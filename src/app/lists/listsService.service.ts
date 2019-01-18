import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { ToDoTable } from '../classes/ToDoTable';
import { ROOT_URL } from '../classes/config';
import { FormsModule, NgForm } from '@angular/forms';
import { resolve } from 'q';

const LISTS = [
  'eden', 'dva', 'tri',
];




@Injectable()
export class ListsService {

  constructor(private http: HttpClient) { }


  //get lists from the server
  getLists(): Observable<ToDoTable[]>{
    return this.http.get<ToDoTable[]>(ROOT_URL + '/list/get');
  }
  //add a new list 
  addList(form): Observable<ToDoTable> {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    const url = `${ROOT_URL}/list/post`;
    console.log(JSON.stringify(form));
    return this.http.post<ToDoTable>(url, JSON.stringify(form), {headers});
  }
}
  

