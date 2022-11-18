// export const tasks = [
// 	{ text: 'Buy milk', done: false, id: 9323 },
// 	{ text: 'Pick up Tom from airport', done: false, id: 4334 },
// 	{ text: 'Visit party', done: false, id: 323 },
// 	{ text: 'Visit doctor', done: true, id: 4532 },
// 	{ text: 'Buy meat', done: true, id: 34545 },
// ];

export const setItem = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
