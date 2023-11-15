import { Component, OnInit, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CtColumnComponent } from 'src/app/components/ct-column/ct-column.component';
import { CtInputComponent } from 'src/app/components/ct-input/ct-input.component';
import { Observable } from 'rxjs';
import { IColumn, ITask } from 'src/app/models/task.model';
import { TasksService } from 'src/app/shared/services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-todo-list',
	imports: [TodoCardComponent, CtColumnComponent, CtInputComponent, CommonModule],
	standalone: true,
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent  {
	private taskService = inject(TasksService);
	readonly taskColumns$: Observable<IColumn[] | null> = this.taskService.getTasks$();


}
