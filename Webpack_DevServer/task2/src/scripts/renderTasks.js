import { getItem } from './storage.js';
import './list-item.scss';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
	let tasksList;
	if (getItem('tasksList') === null) {
		tasksList = [];
	} else {
		tasksList = getItem('tasksList');
	}
	listElem.innerHTML = '';
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			const deleteBtn = document.createElement('button');
			deleteBtn.classList.add('list-item_delete-btn');
			deleteBtn.innerHTML = `<i class="fa fa-window-close" aria-hidden="true"></i>`;
			deleteBtn.setAttribute('id', id);
			listItemElem.classList.add('list-item');
			const textElem = document.createElement('span');
			textElem.classList.add('list-item_text');
			textElem.innerHTML = text;
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('id', id);
			checkbox.classList.add('list-item_checkbox');
			checkbox.checked = done;
			if (done === true) {
				listItemElem.classList.add('list-item_done');
			}
			if (done === false && listElem.classList.contains('list-item_done')) {
				listItemElem.classList.remove('list-item_done');
			}

			listItemElem.append(checkbox, textElem, deleteBtn);

			return listItemElem;
		});
	listElem.append(...tasksElems);
};
