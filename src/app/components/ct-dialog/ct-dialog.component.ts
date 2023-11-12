import {
	AfterViewInit,
	Component,
	EmbeddedViewRef,
	Input,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
	inject,
} from '@angular/core';
import { CtDialogService } from './ct-dialog.service';

@Component({
	selector: 'ct-dialog',
	standalone: true,
	templateUrl: './ct-dialog.component.html',
	styleUrls: ['./ct-dialog.component.scss'],
})
export class CtDialogComponent implements AfterViewInit {
	@ViewChild('contentElement', { read: ViewContainerRef })
	container!: ViewContainerRef;

	@Input()
	template: TemplateRef<any> | undefined;

	ngAfterViewInit(): void {
		const view = this.template?.createEmbeddedView(null);
		if (view) {
			this.container?.insert(view);
		}
	}
}
