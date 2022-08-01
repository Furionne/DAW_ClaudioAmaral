import { hashSync, compareSync } from 'bcrypt';
export class Password {
	public static hash(password: string): string {
		return hashSync(password, 10);
	}

	public static compare(password: string, hash: string): boolean {
		return compareSync(password, hash);
	}
}
