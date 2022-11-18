import { setItem, getItem } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { updateTask, getTasksList } from './tasksGateway.js';
import { onDeleteEvent } from './deleteTask.js';

const onChange = (event) => {
	const isCheckbox = event.target.classList.contains('list-item_checkbox');

	if (!isCheckbox) {
		return;
	}

	const storage = getItem('tasksList');
	const taskId = event.target.getAttribute('id');
	const { text, createDate } = storage.find((task) => task.id === taskId);
	const done = event.target.checked;
	const updatedTask = {
		text,
		createDate,
		done,
		finishDate: done ? new Date().toISOString() : null,
	};

	updateTask(taskId, updatedTask)
		.then(() => getTasksList())
		.then((newTasksList) => {
			setItem('tasksList', newTasksList);
			renderTasks();
		});

	// [...document.querySelectorAll('.list__item-checkbox')].map((el) => {
	// 	if (
	// 		el.getAttribute('id') === event.target.getAttribute('id') &&
	// 		el.checked
	// 	) {
	// 		storage
	// 			.filter((task) => task.id === event.target.getAttribute('id'))
	// 			.map((task) => (task.done = true));
	// 	}
	// 	if (
	// 		el.getAttribute('id') === event.target.getAttribute('id') &&
	// 		!el.checked
	// 	) {
	// 		storage
	// 			.filter((task) => task.id === event.target.getAttribute('id'))
	// 			.map((task) => (task.done = false));
	// 	}
	// 	return storage;
	// });
	// return setItem('tasksList', storage);
};

export const changeFunction = () => {
	document.querySelector('.list').addEventListener('click', function (event) {
		// event.stopPropagation();
		onChange(event);
		onDeleteEvent(event);
	});
};

// 1. Prepare data
// 2. Update Data in db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
