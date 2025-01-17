import rawFlashcards from "../data/flashcards.json";
import { IFlashcard } from "./interfaces";
import * as config from "../config";

export const getAppData = () => {
	let appData = config.initialAppData;
	const localStorageAppData = localStorage.getItem("appData");
	if (localStorageAppData !== null) {
		appData = JSON.parse(structuredClone(localStorageAppData));
	}
	return appData;
};

export const getFlashcards = () => {
	const appData = getAppData();
	const flashcards: IFlashcard[] = [];
	for (const rawFlashcard of rawFlashcards) {
		const flashcard: IFlashcard = {
			id: rawFlashcard.id,
			category: rawFlashcard.category,
			front: rawFlashcard.front,
			back: rawFlashcard.back,
			pronunciation: rawFlashcard.pronunciation,
			isOpen: false,
			status: "learning",
			whenMarkedAsWaiting: ""
		};
		flashcards.push(flashcard);
	}

	for (const metadataFlashcard of appData.metadataFlashcards) {
		const flashcard = flashcards.find((m) => m.id === metadataFlashcard.id);
		if (flashcard) {
			flashcard.status = metadataFlashcard.status;
			flashcard.whenMarkedAsWaiting = metadataFlashcard.whenMarkedAsWaiting;
		}
	}
	console.log(flashcards);

	return flashcards;
};
