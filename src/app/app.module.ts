import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtInputComponent } from './components/ct-input/ct-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CtButtonComponent } from './components/ct-button/ct-button.component';
import { TodoListComponent } from './modules/todo-list/todo-list.component';
import { CtSidebarComponent } from './components/ct-sidebar/ct-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CtInputComponent,
		FormsModule,
		ReactiveFormsModule,
		CtButtonComponent,
		CtSidebarComponent,
		TodoListComponent,
		HeaderComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
