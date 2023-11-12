import { Directive, ElementRef, OnInit, inject } from '@angular/core';
import { Subscription, fromEvent, takeUntil } from 'rxjs';

@Directive({
	selector: '[ctDragNDrop]',
	standalone: true,
})
export class DragNDropDirective implements OnInit {
	private element!: HTMLElement;
	private subscriptions: Subscription[] = [];

	private elementRef = inject(ElementRef);

	ngOnInit(): void {
		this.element = this.elementRef.nativeElement as HTMLElement;
		this.initDrag();
	}

	initDrag() {
		const dragStart$ = fromEvent<MouseEvent>(this.element, 'mousedown');
		const dragEnd$ = fromEvent<MouseEvent>(this.element, 'mouseup');
		const drag$ = fromEvent<MouseEvent>(this.element, 'mousemove').pipe(takeUntil(dragEnd$));

		let initialX: number,
			initialY: number,
			currentX = 0,
			currentY = 0;

		let dragSub: Subscription;

		const dragStartSub = dragStart$.subscribe((event: MouseEvent) => {
			initialX = event.clientX - currentX;
			initialY = event.clientY - currentY;

			this.element.classList.add('drag-n-drop');

			dragSub = drag$.subscribe((event: MouseEvent) => {
				event.preventDefault();

				currentX = event.clientX - initialX;
				currentY = event.clientY - initialY;

				this.element.style.transform = 'translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
			});
		});

		const dragEndSub = dragEnd$.subscribe(() => {
			initialX = currentX;
			initialY = currentY;
			this.element.classList.remove('drag-n-drop');
			if (dragSub) dragSub.unsubscribe();
		});

		this.subscriptions.push(...[dragStartSub, dragEndSub]);
	}

	ngOnDestroy() {
		this.subscriptions.forEach(subscription => subscription?.unsubscribe());
	}
}
