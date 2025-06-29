<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Coupon from '../../components/Coupon.svelte';
	import type { PageProps } from './$types';
	import autoAnimate from '@formkit/auto-animate';
	import { tick } from 'svelte';

	let { form, data }: PageProps = $props();
	let verified = $state(false);
	let vid_id = $state('');
	let videos = $state([...data.videos]); // Track video list reactively
	$effect(() => {
		if (form?.success) {
			const newVideo = form.data[0];
			console.log(newVideo);
			if (!videos.some((v) => v.id === newVideo.id)) {
				videos = [newVideo, ...videos];
			}
		}
	});

	$effect(() => {
		const channel = data.supabase.channel('video-verify-channel');

		// Handle UPDATE (existing)
		channel.on(
			'postgres_changes',
			{
				event: 'UPDATE',
				schema: 'public',
				table: 'user-plastic-videos',
				filter: `user_id=eq.${data.user?.id}`
			},
			(payload) => {
				console.log('🔄 Video updated:', payload);
				const updatedVideo = payload.new;

				const newList = videos.map((v) =>
					v.id === updatedVideo.id ? { ...v, ...updatedVideo } : v
				);

				videos = newList;
			}
		);

		// Subscribe to the channel
		channel.subscribe((status) => {
			if (status === 'SUBSCRIBED') {
				console.log('🎉 Subscribed to video events!');
			} else {
				console.warn('⚠️ Subscription status:', status);
			}
		});

		return () => {
			data.supabase.removeChannel(channel);
		};
	});
</script>

<div class="grid plac-items-center text-center">
	{#if verified}
		Congrats Here is your coupon
		<Coupon
			video_id={vid_id}
			supabase={data.supabase}
			ondone={async () => {
				location.reload(); // ✅ full reload (bypasses cache if needed)
			}}
		/>
	{:else}
		<div class="grid w-screen place-items-center p-4">
			{/* @ts-ignore */ null}

			{#each videos as vid}
				<div
					class="flex sm:flex-row flex-col items-center gap-3 w-full px-4 py-6 bg-primary rounded-xl m-2"
					use:autoAnimate
				>
					<video controls src={vid.video_url} alt="hi" class="sm:w-[50vw] w-[75vw]" />
					{/* @ts-ignore */ null}
					<div class="text-center flex-1 font-bold text-3xl">
						<div>Video ID: {vid.id}</div>
						<div>Verified: {vid.verified}</div>

						{#if vid.verified}
							<button
								class="btn"
								on:click={() => {
									verified = true;
									vid_id = vid.id;
								}}>Get Reward</button
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<form method="post" use:enhance enctype="multipart/form-data">
			<input accept=".mp4" type="file" class="file-input" name="video" />
			<button class="btn">Submit</button>
		</form>
	{/if}
</div>
