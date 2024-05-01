export function expiresAfterThisManyHours(hours: number) {
	return Date.now() + 1000 * 60 * 60 * hours;
}
