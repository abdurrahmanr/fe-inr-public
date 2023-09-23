export const boldNoRuin =
	'before:block before:content-[attr(title)] before:font-semibold before:h-0 before:overflow-hidden before:invisible before:capitalize';

export const toCapitalize = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export const underlineTitle =
	'after:block after:h-[3px] after:w-14 after:bg-primary after:mt-[12px]';

// export const fetcher = (url, params) =>
// 	fetch(...args).then((res) => res.json());

export const BASE_URL = 'https://inr.hmjti-uinam.com/api/public';

export const convertDate = (date) => {
	return new Date(date).toLocaleDateString('id-ID', {
		year: 'numeric',
		day: 'numeric',
		month: 'long',
	});
};

// ${location.pathname.match('profile') ? 'font-semibold text-black' : 'text-greyCol'}
