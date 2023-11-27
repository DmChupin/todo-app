import { Component, OnInit, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CtColumnComponent } from 'src/app/components/ct-column/ct-column.component';
import { CtInputComponent } from 'src/app/components/ct-input/ct-input.component';
import { Observable } from 'rxjs';
import { IColumn, ITask } from 'src/app/models/task.model';
import { TasksService } from 'src/app/shared/services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-todo-list',
	imports: [TodoCardComponent, CtColumnComponent, CtInputComponent, CommonModule, ReactiveFormsModule],
	standalone: true,
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
	private taskService = inject(TasksService);
	readonly taskColumns$: Observable<IColumn[] | null> = this.taskService.getTasks$();
	taskColumns: IColumn[] | null = []; //Временная заглушка, пока нет апи. Необходима для изменения данных при добавлении

	addTaskForm!: FormGroup;

	addTask(columnId: number) {
		const value = this.addTaskForm.value[columnId];

		if (!value) return;

		this.taskColumns
			?.find(item => {
				return item.id === columnId;
			})
			?.tasks.push({
				id: 11,
				author: 'test',
				columnId: columnId,
				text: value,
			});
	}
	ngOnInit(): void {
		const group: any = {};
		this.taskColumns$.subscribe(items => {
			this.taskColumns = items;

			items?.forEach(item => {
				group[item.id] = new FormControl();
			});
			this.addTaskForm = new FormGroup(group);
		});
	}
}
