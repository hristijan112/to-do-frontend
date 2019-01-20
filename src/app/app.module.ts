import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import {ListsService} from './lists/listsService.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  { path: ':status', component: ListsComponent },
  { path: '**', redirectTo: '/default' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ListsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
