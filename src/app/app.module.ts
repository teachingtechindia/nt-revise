import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DashboardComponent,
    CreateTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    TodosService,
    // {
    //   provide: TodosService,
    //   useClass: TodosService,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
