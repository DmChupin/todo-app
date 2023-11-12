import { ComponentRef, Injectable, Injector, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { CtDialogComponent } from './ct-dialog.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CtDialogService {
	private injector = inject(Injector);

	private beforeClosed$ = new Subject<boolean>();
	private afterClosed$ = new Subject<boolean>();
	private dialogComponent: ComponentRef<any> | undefined;

	open(template: TemplateRef<any>, view: ViewContainerRef) {
		return new Observable(observer => {
			view.clear();

			const component = view.createComponent(CtDialogComponent, {
				injector: this.injector,
			});

			component.setInput('template', template);
			component.changeDetectorRef.detectChanges();
			this.dialogComponent = component;
			this.afterClosed$.subscribe(res => {
				observer.next(res);
				observer.complete();
			});
		});
	}
	close(result?: any): void {
		this.beforeClosed$.next(result);
		this.beforeClosed$.complete();
		this.dialogComponent?.destroy();
		this.afterClosed$.next(result);
		this.afterClosed$.complete();
	}
	afterClosed(): Observable<boolean> {
		return this.afterClosed$.asObservable();
	}
	beforeClosed(): Observable<boolean> {
		return this.beforeClosed$.asObservable();
	}
}
