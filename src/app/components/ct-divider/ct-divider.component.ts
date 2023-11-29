import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ct-divider',
	templateUrl: './ct-divider.component.html',
	styleUrls: ['./ct-divider.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtDividerComponent {}
