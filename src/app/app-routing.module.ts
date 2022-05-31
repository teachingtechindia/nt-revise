import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'todos',
        component: TodosComponent,
      },
      {
        path: 'create-todo',
        component: CreateTodoComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
