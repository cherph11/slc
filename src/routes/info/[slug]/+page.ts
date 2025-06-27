import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { plasticData } from '../../../plasticData';
export const load: PageLoad = ({ params }) => {
	if (Number(params.slug) < 8 ) {
		return plasticData[Number(params.slug)]
	}

	error(404, 'Not found');
};