import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	standalone: true,
	selector: 'ct-column',
	templateUrl: './ct-column.component.html',
	styleUrls: ['./ct-column.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtColumnComponent {}
