import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import {ToDoTable} from 'src/app/classes/ToDoTable';
import {ListsService} from './listsService.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {

  @Input() list: ToDoTable;
  editList: ToDoTable;
  lists: ToDoTable[];
  listsCreate: ToDoTable[];
  createList: ToDoTable;
  submitted = false;
  model: ToDoTable = new ToDoTable();
  isDisabled: boolean = true;
  private path;


  onSubmit(form) {
    this.listsService.addList(form.value)
      .subscribe(data => this.ngOnInit());
    form.reset();
  }

  constructor(private listsService: ListsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
    this.getListsByPath(this.path);
    });
  }


  getListsByPath(pateka = ''): void{
    this.listsService.getLists(pateka).subscribe(lists => this.lists = lists);
  }

  deleteList(list: ToDoTable): void{
    if(confirm("Do you want to delete this list?")){
    this.listsService.deleteList(list.id).subscribe(data => this.ngOnInit());
    }
  }

  edit(){
    this.isDisabled=false;
    }

  update(list1): void{
    this.listsService.updateList(this.editList).subscribe(data => this.ngOnInit());
    this.isDisabled=true;
  }

}
