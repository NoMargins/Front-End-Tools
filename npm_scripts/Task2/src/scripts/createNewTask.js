import { renderTasks } from './renderTasks.js';
import { setItem, getItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

const newTaskElem = document.querySelector('.task-input');
const submitElem = document.querySelector('.create-task-btn');

const newTaskFunction = () => {
	const newTask = {
		text: `${newTaskElem.value}`,
		done: false,
		createDate: new Date().toISOString(),
	};

	createTask(newTask)
		.then(() => getTasksList())
		.then((newTasksList) => {
			setItem('tasksList', newTasksList);
			renderTasks();
		});
};

const submitFunction = () => {
	if (!newTaskElem.value) {
		newTaskElem.classList.add('task-input__notice');
		return;
	} else {
		newTaskElem.classList.remove('task-input__notice');
		newTaskFunction();
		renderTasks();
		newTaskElem.value = '';
	}
};

export const submitNewElemFunction = () =>
	submitElem.addEventListener('click', submitFunction);
