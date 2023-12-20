import { z } from 'zod';

export const flashCardSchema = z.object({
	id: z.string().max(6),
	category: z.string(),
	front: z.string(),
	back: z.string(),
	pronunciation: z.string(),
});

export type TflashCard = z.infer<typeof flashCardSchema>;
