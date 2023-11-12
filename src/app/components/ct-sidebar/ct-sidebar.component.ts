import { Component, Input } from '@angular/core';

@Component({
	selector: 'ct-sidebar',
	standalone: true,
	templateUrl: './ct-sidebar.component.html',
	styleUrls: ['./ct-sidebar.component.scss'],
})
export class CtSidebarComponent {
	@Input()
	opened: boolean = false;
}
