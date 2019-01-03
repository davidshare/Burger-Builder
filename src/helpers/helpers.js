/**
 * @desc this function capitalizes the first letter of a word
 * @param { string } word - the word who's first letter is capitalized
 * @returns {string} - returns a string of the word
 */

export const jsUCFirst = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};
