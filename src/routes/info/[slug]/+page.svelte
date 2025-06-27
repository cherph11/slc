<script lang="ts">
	import { Earth, Flame } from '@lucide/svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div>
	<div class="flex sm:flex-row flex-col items-center gap-10 px-7">
		<img
			src={data.image}
			class={`h-65 bg-secondary p-3 rounded-3xl glass motion-bg-in-transparent`}
			style={`view-transition-name: plastic-${data.id};`}
			alt="Shoes"
		/>

		<div class="flex flex-col justify-center gap-4 text-2xl font-bold">
			<span>
				<span class="font-medium">
					{data.description}
				</span>
				<br />
				Common Items:
				<span class="text-teal-800">
					{data.commonItems}
				</span>
			</span>

			<span>
				Type Of Plastic:
				<span class="text-red-700">
					{data.type}
				</span>
			</span>
		</div>
	</div>

	<div class="grid sm:grid-cols-2 gap-4 place-items-center w-screen p-7">
		<div class="card pt-5 bg-red-500 glass w-85 shadow-sm">
			<figure><Flame class="text-amber-400" size="44" /></figure>
			<div class="card-body grid place-items-center">
				<h2 class="card-title">Problems it causes</h2>
				<ul class="list-disc w-full mx-auto block list-inside text-center">
					{#each data.harms as harm}
						<li>{harm}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="card pt-5 bg-blue-500 glass w-85 shadow-sm">
			<figure><Earth class="text-green-900" size="44" /></figure>
			<div class="card-body grid place-items-center">
				<h2 class="card-title">How to recycle it</h2>
				<ul class="list-disc w-full mx-auto block list-inside text-center">
					{#each data.recycle as harm}
						<li>{harm}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
