import { getRandomInt } from './number';

export function generateId(): string {
	return `${getRandomInt(10000)}-${Date.now()}`;
}
