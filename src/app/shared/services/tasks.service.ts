import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { IColumn, ITask } from '../../models/task.model';
import { tasksMock } from '../mock/todo.mock';

@Injectable({
	providedIn: 'root',
})
export class TasksService {
	private readonly tasksColumns$ = new BehaviorSubject<IColumn[] | null>(null);

	getTasks$(): Observable<IColumn[]> {
		return of({ data: { items: tasksMock } }).pipe(map(({ data }) => data.items));
	}
}
