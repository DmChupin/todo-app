import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CtSidebarComponent } from './components/ct-sidebar/ct-sidebar.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	// showTest = () => {
	// 	console.log(this.form.value);
	// };

	// constructor(private fb: FormBuilder) {}

	// public form = this.fb.group({
	// 	test: 'asd',
	// });
	// onClick(event: Event) {
	// 	console.log(event);
	// }

	@ViewChild(CtSidebarComponent, { static: false })
	sidebar: CtSidebarComponent | undefined;

	sidebarEvent() {
		this.sidebar && (this.sidebar.opened = !this.sidebar.opened);
	}
}
