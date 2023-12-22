import { getFlashcardsFromJson } from '@/lib/utils';
import { publicProcedure, router } from './trpc';
import { z } from 'zod';

export const appRouter = router({
	getFlashcards: publicProcedure.query(async () => {
		const flashcards = await getFlashcardsFromJson();

		return flashcards;
	}),
});

export type AppRouter = typeof appRouter;
