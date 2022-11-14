export const getLocalStorageData = (key) => {
	const res = localStorage.getItem(`${key}`);
	return JSON.parse(res);
};
