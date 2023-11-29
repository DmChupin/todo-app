import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-notification-list-item',
	templateUrl: './notification-list-item.component.html',
	styleUrls: ['./notification-list-item.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationListItemComponent {}
