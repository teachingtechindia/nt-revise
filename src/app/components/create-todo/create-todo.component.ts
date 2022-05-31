import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  @Output() newTodo = new EventEmitter<{
    task: string;
    id: number;
    desc: string;
  }>();

  @ViewChild('task', { static: false }) task!: ElementRef;
  @ViewChild('desc', { static: false }) desc!: ElementRef;

  constructor(private todosService: TodosService, private router: Router) {}

  ngOnInit(): void {}

  addTodo() {
    const task = this.task.nativeElement.value;
    const desc = this.desc.nativeElement.value;
    console.log('create toodo compononent emitting new value: ', task, desc);

    // this.newTodo.emit({ task: task, desc: desc, id: Date.now() });

    this.todosService.addTodo({ task, desc, id: Date.now() });
    this.router.navigateByUrl('/todos');
  }
}
