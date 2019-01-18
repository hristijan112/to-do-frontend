import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import {ToDoTable} from 'src/app/classes/ToDoTable';
import {ListsService} from './listsService.service';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {

  @Input() list: ToDoTable;
  lists: ToDoTable[];
  listsCreate: ToDoTable[];
  createList: ToDoTable;
  submitted = false;
  model: ToDoTable = new ToDoTable()

  onSubmit(form) {
    this.listsService.addList(form.value)
      .subscribe(data => this.getLists());
    form.reset();
  }

  constructor(private listsService: ListsService) { }


  ngOnInit() {
    this.getLists();
  }

  getLists(): void{
    this.listsService.getLists().subscribe(lists => this.lists = lists);
  }
}
