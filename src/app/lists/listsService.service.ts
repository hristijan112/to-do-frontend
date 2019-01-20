import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { ToDoTable } from '../classes/ToDoTable';
import { ROOT_URL } from '../classes/config';
import { FormsModule, NgForm } from '@angular/forms';
import { resolve } from 'q';


@Injectable()
export class ListsService {

  constructor(private http: HttpClient) { }


  //get lists from the server
  getLists(pateka = ''): Observable<ToDoTable[]>{
    if(pateka == 'ascending'){
    return this.http.get<ToDoTable[]>(ROOT_URL + '/list/get/asc');
    }
    else if(pateka == 'descending'){
      return this.http.get<ToDoTable[]>(ROOT_URL + '/list/get/desc');
    }
    else{
      return this.http.get<ToDoTable[]>(ROOT_URL + '/list/get');
    }
  }

  //get lists from the server ordered by name ascending
  getListsASC(): Observable<ToDoTable[]>{
    return this.http.get<ToDoTable[]>(ROOT_URL + 'list/get/asc');
  }

  //get lists from the server ordered by name descending
  getListsDESC(): Observable<ToDoTable[]>{
    return this.http.get<ToDoTable[]>(ROOT_URL + 'list/get/desc');
  }

  //add a new list 
  addList(form): Observable<ToDoTable> {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    const url = `${ROOT_URL}/list/post`;
    console.log(JSON.stringify(form));
    return this.http.post<ToDoTable>(url, JSON.stringify(form), {headers});
  }

  //delete a list
  deleteList(ID: number): Observable<{}> {
    const url = `${ROOT_URL}/list/delete/${ID}`;
    return this.http.delete(url);
  }

  //Edit a list
  updateList(list: ToDoTable): Observable<ToDoTable>{
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    const url = `${ROOT_URL}/list/put/${list.id}`;
    return this.http.put<ToDoTable>(url , JSON.stringify(list), {headers});
  }
}
  

