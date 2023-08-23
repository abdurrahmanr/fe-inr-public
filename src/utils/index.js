export const boldNoRuin =
	'before:block before:content-[attr(title)] before:font-semibold before:h-0 before:overflow-hidden before:invisible';

export const toCapitalize = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export const underlineTitle =
	'after:block after:h-[3px] after:w-14 after:bg-primary after:mt-[12px]';
