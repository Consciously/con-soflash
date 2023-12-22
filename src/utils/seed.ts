import * as fs from 'fs/promises';
import { TflashCard } from '@/lib/validation/validation';
import path from 'path';
import { db } from '@/lib/db';

const readFlashcardsFromJson = async (): Promise<void> => {
	try {
		const directoryPath = path.resolve(__dirname, '../data');
		const files = await fs.readdir(directoryPath);

		for (const file of files) {
			const filePath = path.join(directoryPath, file);
			const rawJson = await fs.readFile(filePath, 'utf-8');
			const flashcards = JSON.parse(rawJson) as TflashCard[];

			seedFlashcardsIntoDb(flashcards);
		}
	} catch (error) {
		console.error('Error: ', error);
	}
};

const seedFlashcardsIntoDb = async (flashcards: TflashCard[]) => {
	// Seed data into 'Flashcard' table
	for (const flashcard of flashcards) {
		await db.flashcard.create({
			data: {
				category: flashcard.category,
				front: flashcard.front,
				back: flashcard.back,
				pronunciation: flashcard.pronunciation,
			},
		});
	}
};

readFlashcardsFromJson()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
