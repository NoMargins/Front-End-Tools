import { getTasksList } from '../tasksGateway';

it('should fetch tasksList', () => {
  const result = getTasksList().then(result => result);
  expect(result).toEqual([]);
});