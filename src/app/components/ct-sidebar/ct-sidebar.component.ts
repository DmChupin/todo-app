import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	DoCheck,
	Input,
	OnChanges,
	SimpleChanges,
	inject,
} from '@angular/core';
import { ISection } from 'src/app/models/section.model';

@Component({
	selector: 'ct-sidebar',
	standalone: true,
	templateUrl: './ct-sidebar.component.html',
	styleUrls: ['./ct-sidebar.component.scss'],
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtSidebarComponent implements OnChanges {
	@Input()
	opened: boolean = false;

	@Input()
	sections: ISection[] | null = [];

	private cdr = inject(ChangeDetectorRef);
	// ngDoCheck(): void {
	// 	console.log('DoCheck', this.opened);
	// 	this.cdr.detectChanges();
	// }
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes);

		this.cdr.detectChanges();
	}
}
