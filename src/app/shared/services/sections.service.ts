import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { ISection } from 'src/app/models/section.model';
import { sectionMock } from '../mock/section.mock';

@Injectable({
	providedIn: 'root',
})
export class SectionsService {
	private readonly sections$ = new BehaviorSubject<ISection[] | null>(null);

	getSections$(): Observable<ISection[]> {
		return of({ data: { items: sectionMock } }).pipe(map(({ data }) => data.items));
	}
}
