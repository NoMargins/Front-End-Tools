import { renderTasks } from './renderTasks.js';
import { submitNewElemFunction } from './createNewTask.js';
import { changeFunction } from './doneStatusChecker.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', function () {
	getTasksList().then((tasksList) => {
		setItem('tasksList', tasksList);
		renderTasks();
	});
	submitNewElemFunction();
	changeFunction();
});

const onStorageChange = (e) => console.log(e);

window.addEventListener('storage', onStorageChange);
