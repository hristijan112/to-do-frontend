import { Component, OnInit } from '@angular/core';
import {ToDoTable} from 'src/app/classes/ToDoTable';
import {ListsService} from './listsService.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {

  //private lists1;

  lists: ToDoTable[];

  constructor(private listsService: ListsService) { }

  //getLists1(){
   // return this.listsService.get().then(lists1 => this.lists1 = lists1);
  //}  

  ngOnInit() {
    this.getLists();
  }

  getLists(): void{
    this.listsService.getLists().subscribe(lists => this.lists = lists);
  }
}
