import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const actions = {
	register: async ({ request, locals: { supabase } }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		console.log('Signing up');
		const { error } = await supabase.auth.signUp({ email, password });
		console.log(error);
	},
	login: async ({ request, locals: { supabase } }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		await supabase.auth.signInWithPassword({ email, password });
	},
	logout: async ({ request, locals: { supabase } }) => {
		await supabase.auth.signOut();
	}
} satisfies Actions;
