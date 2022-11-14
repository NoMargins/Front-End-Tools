import { sum } from '../calculator';
import { mult } from '../calculator';

it('should return sum 2 + 3 = 5', () => {
	expect(sum(2, 3)).toEqual(5);
});

it('should return multiply 2 * 3 = 6', () => {
	expect(mult(2, 3)).toEqual(6);
});
