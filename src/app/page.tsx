import FlashcardReel from '@/components/FlashcardReel';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function Home() {
	return (
		<>
			<section className='bg-gray-50'>
				<MaxWidthWrapper className='py-10'>
					<div className='mx-auto text-center flex flex-col items-center max-w-3xl'>
						<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Social Flashcards
						</h1>
					</div>
				</MaxWidthWrapper>
			</section>
			<section className='bg-gray-50'>
				<MaxWidthWrapper className='py-10'>
					<FlashcardReel />
				</MaxWidthWrapper>
			</section>
		</>
	);
}