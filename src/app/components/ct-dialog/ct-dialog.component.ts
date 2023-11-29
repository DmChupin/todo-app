import {
	AfterContentInit,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
	inject,
} from '@angular/core';

@Component({
	selector: 'ct-dialog',
	standalone: true,
	templateUrl: './ct-dialog.component.html',
	styleUrls: ['./ct-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtDialogComponent implements AfterContentInit {
	@ViewChild('contentElement', { read: ViewContainerRef, static: true })
	container!: ViewContainerRef;

	@Input()
	template: TemplateRef<any> | undefined;

	private cdr = inject(ChangeDetectorRef);

	ngAfterContentInit(): void {
		const view = this.template?.createEmbeddedView(null);
		if (view) {
			this.container?.insert(view);
		}
		this.cdr.detectChanges();
	}
}
