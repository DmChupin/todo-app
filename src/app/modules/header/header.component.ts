import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Output()
	sidebarEvent = new EventEmitter<void>();

	openSidebar() {
		this.sidebarEvent.emit();
	}

	home(){}
}
