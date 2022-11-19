import { setItem, getItem } from './storage';
import renderTasks from './renderTasks';
import { updateTask, getTasksList } from './tasksGateway';
import onDeleteEvent from './deleteTask';

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
};

export default () => {
  document.querySelector('.list').addEventListener('click', (event) => {
    // event.stopPropagation();
    onChange(event);
    onDeleteEvent(event);
  });
};
