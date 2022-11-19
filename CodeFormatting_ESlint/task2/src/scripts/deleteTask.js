import { deleteTask, getTasksList } from './tasksGateway';
import { setItem } from './storage';
import renderTasks from './renderTasks';

export default (e) => {
  const isButton = e.target.parentNode.classList.contains(
    'list-item_delete-btn',
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
