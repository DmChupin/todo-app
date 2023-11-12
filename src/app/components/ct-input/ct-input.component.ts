import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'ct-input',
	templateUrl: './ct-input.component.html',
	styleUrls: ['./ct-input.component.scss'],
	imports: [FormsModule],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: CtInputComponent,
		},
	],
})
export class CtInputComponent implements ControlValueAccessor {
	@Input()
	caption: string = '';

	disabled = false;
	value: string = '';

	onChange = (value: string) => {};
	onTouched = () => {};

	writeValue(value: string): void {
		console.log('writeV', value);

		this.value = value;
	}
	registerOnChange(onChange: any): void {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: any): void {}

	setDisabledState?(disabled: boolean): void {
		this.disabled = disabled;
	}
}
