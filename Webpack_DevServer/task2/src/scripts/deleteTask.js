import { deleteTask, getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
import { renderTasks } from './renderTasks.js';

export const onDeleteEvent = (e) => {
	const isButton = e.target.parentNode.classList.contains(
		'list-item_delete-btn'
	);
	if (!isButton) {
		return;
	}
	const taskId = e.target.parentNode.getAttribute('id');

	deleteTask(taskId)
		.then(() => getTasksList())
		.then((newTasksList) => {
			setItem('tasksList', newTasksList);
			renderTasks();
		});
};
