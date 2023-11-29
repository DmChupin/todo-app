import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	imports: [NotificationListComponent, CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Output()
	sidebarEvent = new EventEmitter<void>();

	isShowNotifications = false;

	openSidebar() {
		this.sidebarEvent.emit();
	}

	home() {}

	showNotifications() {
		this.isShowNotifications = !this.isShowNotifications;
	}
}
