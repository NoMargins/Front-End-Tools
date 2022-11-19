import { getTasksList } from '../tasksGateway';

it('should fetch tasksList', () => {
  const result = getTasksList().then((res) => res);
  expect(result).toEqual([]);
});
