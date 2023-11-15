import { IColumn } from 'src/app/models/task.model';

export const tasksMock: IColumn[] = [
	{
		id: 1,
		name: 'TODO',
		order: 1,
		tasks: [
			{
				id: 1,
				author: 'Chuc',
				columnId: 1,
				text: 'Make all inputs with same color and buttons inside',
			},
			{
				id: 2,
				author: 'Chuc',
				columnId: 1,
				text: 'Make another header, current is annoying',
			},
			{
				id: 4,
				author: 'Chuc',
				columnId: 1,
				text: 'Write a resume on HH. Your current work is like a peace of cake',
			},
		],
	},
	{
		id: 2,
		name: 'IN PROGRESS',
		order: 2,
		tasks: [
			{
				id: 5,
				author: 'Chuc',
				columnId: 2,
				text: 'Make all inputs with same color and buttons inside',
			},
			{
				id: 6,
				author: 'Chuc',
				columnId: 2,
				text: 'Make another header, current is annoying',
			},
			{
				id: 7,
				author: 'Chuc',
				columnId: 2,
				text: 'Write a resume on HH. Your current work is like a peace of cake',
			},
			{
				id: 8,
				author: 'Chuc',
				columnId: 2,
				text: 'Thats a completed task. U r perfect bro',
			},
		],
	},
	{
		id: 3,
		name: 'Finished',
		order: 3,
		tasks: [
			{
				id: 9,
				author: 'Chuc',
				columnId: 3,
				text: 'Cum. Just cum cum cum cum cum',
			},
		],
	},
];
