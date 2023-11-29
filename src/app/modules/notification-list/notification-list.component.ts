import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationListItemComponent } from './notification-list-item/notification-list-item.component';
import { CtDividerComponent } from 'src/app/components/ct-divider/ct-divider.component';

@Component({
	selector: 'app-notification-list',
	templateUrl: './notification-list.component.html',
	styleUrls: ['./notification-list.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NotificationListItemComponent, CtDividerComponent],
})
export class NotificationListComponent {}
