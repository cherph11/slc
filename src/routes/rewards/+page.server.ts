import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, user } }) => {
	const { data } = await supabase.from('user-plastic-videos').select('*').eq('user_id', user?.id);
	const { data: data2 } = await supabase.storage
		.from('plastic-video')
		.createSignedUrl('5e221c46-8805-474c-9992-3ff2acdf6137-1751174770868.png', 20000);

	return { videos: data, img: data2?.signedUrl };
};
export const actions = {
	default: async ({ request, locals: { supabase, session, user } }) => {
		const data = await request.formData();
		const file = data.get('video') as File;
		const name = `${user?.id}-${Date.now().toString()}.mp4`;
		const { data: dt } = await supabase.storage.from('plastic-video').upload(name, file, {
			cacheControl: '3600',
			upsert: false,
			metadata: {}
		});
		const { data: d } = await supabase.storage
			.from('plastic-video')
			.createSignedUrl(name, 60 * 24 * 30);

		const { error, data: viddata } = await supabase
			.from('user-plastic-videos')
			.insert([{ videos: name, video_url: d.signedUrl }])
			.select();

		console.log(viddata);
		if (!error) {
			return { success: true, data: viddata };
		}
	}
} satisfies Actions;
