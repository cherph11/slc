<script lang="ts">
	import { Leaf, User } from '@lucide/svelte';
	import '../app.css';
	import { onNavigate, invalidate } from '$app/navigation';

	import { onMount } from 'svelte';
	let { data, children } = $props();
	let { session, supabase } = $derived(data);
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="flex flex-col h-screen bg-transparent">
	<div class="navbar text-3xl bg-base-100 shadow-sm">
		<div class="flex-1">
			<a href="/" class="btn bg-transparent border-none text-xl flex max-w-fit"
				><Leaf class="relative left-3 top-4" /> Eco Sanskriti
			</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1 flex items-center gap-2">
				<li>
					<details class="z-[999]">
						<summary>Contribute </summary>
						<ul class="bg-base-100 rounded-t-none p-2">
							<li><a href="/contribute">Contribute</a></li>
							<li><a href="/rewards">Rewards</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/about">About</a></li>
				<li>
					<a
						href="/account"
						class="rounded-[100%] aspect-square glass grid place-items-center p-2 hover:bg-gray-400 hover:bg-opacity-10 transition-all"
					>
						<User />
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="mt-7 h-[100vh-64px] overflow-x-hidden">
		{@render children()}
	</div>
</div>
