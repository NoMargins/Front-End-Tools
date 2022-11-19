import renderTasks from './scripts/renderTasks';
import submitNewElemFunction from './scripts/createNewTask';
import changeFunction from './scripts/doneStatusChecker';
import { getTasksList } from './scripts/tasksGateway';
import { setItem } from './scripts/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  submitNewElemFunction();
  changeFunction();
});
