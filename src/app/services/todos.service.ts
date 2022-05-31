import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  #todos = [
    {
      id: 1,
      task: 'To teach angular',
      desc: 'Covering all the things we have learnt so far',
      isCompleted: true,
    },
    {
      id: 2,
      task: 'To learning something new ',
      desc: null,
      isCompleted: false,
    },
  ];

  constructor() {}

  getTodos() {
    return this.#todos;
  }

  addTodo(todo: any) {
    this.#todos.push(todo);
  }
}
