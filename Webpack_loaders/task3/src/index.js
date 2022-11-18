import { renderTasks } from './scripts/renderTasks.js';
import { submitNewElemFunction } from './scripts/createNewTask.js';
import { changeFunction } from './scripts/doneStatusChecker.js';
import { getTasksList } from './scripts/tasksGateway.js';
import { setItem } from './scripts/storage.js';
import './index.scss';

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
