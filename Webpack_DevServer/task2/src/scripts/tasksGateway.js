const apiUrl = 'https://633aeb89e02b9b64c61ad82e.mockapi.io/tasksList';

export const getTasksList = () => {
	return fetch(apiUrl).then((response) => response.json());
};

export const createTask = (taskData) => {
	return fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	});
};

export const updateTask = (taskId, updatedTaskData) => {
	return fetch(`${apiUrl}/${taskId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(updatedTaskData),
	});
};

export const deleteTask = (taskId) => {
	return fetch(`${apiUrl}/${taskId}`, {
		method: 'DELETE',
	});
};
