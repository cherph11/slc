<script lang="ts">
	import { goto } from '$app/navigation';
	import type { SupabaseClient } from '@supabase/supabase-js';

	let {
		video_id,
		supabase,
		ondone
	}: { video_id: string; supabase: SupabaseClient; ondone: Function } = $props();

	let code = $state('Loading.....');
	let color = $state(0);
	let color_array = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500'];
	let clear: any;
	let timeout: any;
	let done = $state(false);
	function makeid() {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;

		for (var i = 0; i < 14; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		code = result;
		color = Math.floor(Math.random() * 4);
	}

	$effect(() => {
		clear = setInterval(makeid, 50);
		timeout = setTimeout(() => {
			clearInterval(clear);
			done = true;
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	});

	async function redeemCode() {
		navigator.clipboard.writeText(code);

		const { data } = await supabase.from('user-plastic-videos').select('*').eq('id', video_id);
		console.log(data[0].videos);

		await supabase.storage.from('plastic-video').remove(data[0].videos);
		await supabase.from('user-plastic-videos').delete().eq('id', video_id);
		ondone();
	}
</script>

<span
	class={`${['text-red-500', 'text-blue-700', 'text-green-500', 'text-yellow-700'][color]} transition-all font-bold blur-md text-7xl font-mono`}
>
	{code}
</span>

{#if done}
	<span class="mt-5 text-black-400">
		This is a <span class="motion-blur-in-md motion-duration-1000">amazon</span> coupon code</span
	>
	<button
		class="btn max-w-fit m-auto text-white mt-2"
		on:click={() => {
			ondone();
			redeemCode();
		}}
	>
		Copy coupon code
	</button>
	<span class="text-gray-600 font-serif"
		>Note: This will claim your reward and delete it so you cannot claim it once more</span
	>
{/if}
