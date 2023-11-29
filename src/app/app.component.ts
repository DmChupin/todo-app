import { ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CtSidebarComponent } from './components/ct-sidebar/ct-sidebar.component';
import { SectionsService } from './shared/services/sections.service';
import { Observable } from 'rxjs';
import { ISection } from './models/section.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	private sectionService = inject(SectionsService);
	sidebarOpened: boolean = false;
	readonly sections$: Observable<ISection[] | null> = this.sectionService.getSections$();
	sections: ISection[] | null = [];

	ngOnInit(): void {
		this.sections$.subscribe(result => {
			this.sections = result;
		});
	}
	sidebarEvent() {
		this.sidebarOpened = !this.sidebarOpened;
	}
}
