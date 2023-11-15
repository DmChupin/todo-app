export interface ITask {
	id: number;
	author: string;
	columnId: number;
	text: string;
}
export interface IColumn {
	id: number;
	name: string;
	order: number;
	tasks: ITask[];
}
