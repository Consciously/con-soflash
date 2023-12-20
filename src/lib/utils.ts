import * as fs from 'fs/promises';
import { TflashCard } from '@/lib/validation/validation';
import path from 'path';

export const getFlashcardsFromJson = async (
	key: string,
): Promise<TflashCard[] | undefined> => {
	try {
		// Read directory
		const directoryPath = path.resolve(process.cwd(), 'src', 'data');
		const files = await fs.readdir(directoryPath);

		for (const file of files) {
			if (file.includes(key)) {
				const filePath = path.join(directoryPath, file);
				const rawJson = await fs.readFile(filePath, 'utf-8');
				const flashcard = JSON.parse(rawJson) as TflashCard[];

				return flashcard;
			}
		}
	} catch (error) {
		console.error('Error: ', error);
	}
};
