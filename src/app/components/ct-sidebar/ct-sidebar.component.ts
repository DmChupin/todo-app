import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ISection } from 'src/app/models/section.model';

@Component({
	selector: 'ct-sidebar',
	standalone: true,
	templateUrl: './ct-sidebar.component.html',
	styleUrls: ['./ct-sidebar.component.scss'],
	imports: [CommonModule],
})
export class CtSidebarComponent {
	@Input()
	opened: boolean = false;

	@Input()
	sections: ISection[] | null = [];
}
