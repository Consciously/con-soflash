'use client';

import flashcardData from '@/data/flashcard.json';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/utils';
import { TflashCard } from '@/lib/validation/validation';

export default function FlashcardReel() {
	const flashcards: TflashCard[] = Array.from(flashcardData);
	const [openFlashcardId, setOpenFlashcardId] = useState<string | null>(null);

	const handleOpenFlashcard = (flashcardId: string) => {
		setOpenFlashcardId(flashcardId === openFlashcardId ? null : flashcardId);
	};

	return (
		<div className='bg-zinc-100 py-8 px-4'>
			<ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center'>
				{flashcards.map(flashcard => (
					<li
						key={flashcard.id}
						onClick={() => handleOpenFlashcard(flashcard.id)}
						className='cursor-pointer flip-card'
					>
						<motion.div
							className={cn(
								'flip-card-inner border border-zinc-400 w-full h-40 rounded-lg shadow-sm shadow-zinc-500/60',
							)}
							animate={{ rotateY: openFlashcardId === flashcard.id ? 180 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<div className='flip-card-front w-full h-full flex flex-col justify-center items-center'>
								<p>{flashcard.category}</p>
								<p>{flashcard.front}</p>
							</div>
							{openFlashcardId === flashcard.id && (
								<div className='flip-card-back w-full h-full flex flex-col justify-center items-center bg-zinc-600'>
									<p>{flashcard.back}</p>
									<p>{flashcard.pronunciation}</p>
								</div>
							)}
						</motion.div>
					</li>
				))}
			</ul>
		</div>
	);
}
