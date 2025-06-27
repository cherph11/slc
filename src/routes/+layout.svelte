<script lang="ts">
	import { Leaf } from '@lucide/svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

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
			<ul class="menu menu-horizontal px-1">
				<li><a href="/contribute">Contribute</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
	</div>

	<div class="mt-7 h-[100vh-64px] overflow-x-hidden">
		{@render children()}
	</div>
</div>
