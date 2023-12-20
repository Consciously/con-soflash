import { getFlashcardsFromJson } from '@/lib/utils';
import { publicProcedure, router } from './trpc';
import { z } from 'zod';

export const appRouter = router({
	getFlashcards: publicProcedure
		.input(
			z.object({
				key: z.string(),
			}),
		)
		.query(async ({ input }) => {
			const { key } = input;
			const flashcards = await getFlashcardsFromJson(key);

			return flashcards;
		}),
});

export type AppRouter = typeof appRouter;
