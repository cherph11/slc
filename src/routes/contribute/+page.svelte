<script lang="ts">
	import { Cuboid } from '@lucide/svelte';
	import { plasticData } from '../../plasticData.ts';
	import FlexSearch from 'flexsearch';
	import autoAnimate from '@formkit/auto-animate';

	const index = new FlexSearch.Index({ tokenize: 'forward' });

	let input = $state('');
	let searchResults = $derived.by(() => {
		let res = index.search(input);

		return input.length == 0 ? plasticData : res.map((i) => plasticData[i as number]);
	});

	plasticData.forEach((plastic, i) => {
		const item = `${plastic.title} ${plastic.type} ${plastic.commonItems}`;

		index.add(i, item);
	});
</script>

<div class="flex flex-col items-center">
	<input type="text" placeholder="Search" bind:value={input} class="input input-lg" />

	<div use:autoAnimate class="grid sm:grid-cols-3 w-screen place-items-center mt-4 gap-7 px-2">
		{#each searchResults as plastic}
			<a
				href={`/info/${plastic.id}`}
				class="card motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md btn bg-secondary h-fit w-96 bg-base-100 card-sm shadow-sm"
			>
				<figure>
					<img
						src={plastic.image}
						class={`h-45`}
						style={`view-transition-name: plastic-${plastic.id};`}
						alt="Shoes"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{plastic.title}
						<span class="badge badge-sm badge-warning min-w-fit">{plastic.type}</span>
					</h2>
					<p>{plastic.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
