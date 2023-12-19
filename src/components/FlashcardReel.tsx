'use client';

import { z } from 'zod';
import flashcardData from '@/data/flashcard.json';
import { useEffect, useState } from 'react';

const flashCardSchema = z.object({
	id: z.string().max(6),
	category: z.string(),
	front: z.string(),
	back: z.string(),
	pronunciation: z.string(),
});

type TflashCard = z.infer<typeof flashCardSchema>;

export default function FlashcardReel() {
	const flashcards: TflashCard[] = Array.from(flashcardData);
	const [openFlashcardId, setOpenFlashcardId] = useState<string | null>(null);

	const handleOpenFlashcard = (flashcardId: string) => {
		setOpenFlashcardId(currentId =>
			currentId === flashcardId ? null : flashcardId,
		);
	};

	return (
		<div className='bg-zinc-100 py-8 px-4'>
			<ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center'>
				{flashcards.map(flashcard => (
					<li
						key={flashcard.id}
						onClick={() => handleOpenFlashcard(flashcard.id)}
						className='border border-zinc-400 h-40 rounded-lg shadow-sm shadow-zinc-500/60'
					>
						<div className='perspective'>
							<div className='w-full h-full flex flex-col justify-center items-center'>
								<p>{flashcard.category}</p>
								<p>{flashcard.front}</p>
							</div>
							{openFlashcardId === flashcard.id ? (
								<div>
									<p>{flashcard.back}</p>
									<p>{flashcard.pronunciation}</p>
								</div>
							) : null}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
