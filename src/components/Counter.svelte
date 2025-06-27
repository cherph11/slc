<script lang="ts">
	let count = $state(0);

	let countInt = $derived.by(() => {
		let list = [];
		let num = Math.floor(count).toString();

		if (num.length % 2 == 1) {
			list.push(num[0]);
			num = num.slice(1);
		}

		for (let i = 0; i < num.length; i += 2) {
			let part = num.substring(i, i + 2);
			list.push(part);
		}

		return list;
	});
	let clear: ReturnType<typeof setInterval>;

	const incr = () => {
		count = count + 13.6;
	};

	$effect(() => {
		clear = setInterval(incr, 1000);
		return () => {
			clearInterval(clear);
		};
	});
</script>

<span class="sm:text-4xl text-3xl text-center">
	<span class="countdown font-bold text-5xl text-red-800">
		{#each countInt as n}
			<span style={`--value:${n};`} aria-live="polite" aria-label="59">59</span>
		{/each}
	</span>
	<span class="text-gray-500 text-xl font-bold">Tons</span>

	of Plastic Waste Has Been Produced Since You Visited This Site
</span>
