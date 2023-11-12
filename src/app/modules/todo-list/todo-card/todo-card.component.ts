import { Component, Input, OnInit, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CtButtonComponent } from 'src/app/components/ct-button/ct-button.component';
import { CtDialogService } from 'src/app/components/ct-dialog/ct-dialog.service';
import { CtInputComponent } from 'src/app/components/ct-input/ct-input.component';
import { DragNDropDirective } from 'src/app/directives/drag-n-drop/drag-n-drop.directive';
import { ITask } from 'src/app/models/tasks.model';

@Component({
	standalone: true,
	selector: 'app-todo-card',
	templateUrl: './todo-card.component.html',
	styleUrls: ['./todo-card.component.scss'],
	imports: [CtInputComponent, CtButtonComponent, ReactiveFormsModule, DragNDropDirective],
})
export class TodoCardComponent {
	@Input()
	task!: ITask;

	private dialogService = inject(CtDialogService);
	private view = inject(ViewContainerRef);

	updateForm = new FormGroup({
		author: new FormControl(),
		text: new FormControl(),
	});

	openModal(template: TemplateRef<any>) {
		this.dialogService.open(template, this.view).subscribe();
		this.updateForm.patchValue({
			author: this.task?.author,
			text: this.task?.text,
		});
	}
	closeModal() {
		this.dialogService.close();
	}
	updateData() {
		this.task = {
			...this.task,
			text: this.updateForm.controls.text.value,
			author: this.updateForm.controls.author.value,
		};
		this.dialogService.close();
	}
}
