import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	standalone: true,
	selector: 'ct-button',
	templateUrl: './ct-button.component.html',
	styleUrls: ['./ct-button.component.scss'],
})
export class CtButtonComponent {
	@Output()
	onClick = new EventEmitter<any>();

	onClickButton(event: Event) {
		this.onClick.emit(event);
	}
}
