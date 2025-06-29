<script lang="ts">
	let { data } = $props();
	let { session, supabase, user } = $derived(data);
</script>

<div class="w-screen grid place-items-center">
	{#if !session}
		<form
			class="glass py-5 px-11 rounded-xl place-items-center bg-secondary shadow-2xlxl grid gap-3"
			method="POST"
			action="?/login"
		>
			<fieldset class="fieldset">
				<legend class="fieldset-legend">Email</legend>
				<input required type="email" class="input" placeholder="abc@xyz.com" name="email" />
			</fieldset>
			<fieldset class="fieldset">
				<legend class="fieldset-legend">Password</legend>
				<input
					required
					type="password"
					class="input"
					name="password"
					placeholder="Enter Password"
				/>
			</fieldset>

			<div class="join w-fit">
				<button class="btn join-item btn-primary">Login</button>
				<button formaction="?/register" class="btn join-item">Register</button>
			</div>
		</form>
	{:else}
		<form method="post" action="?/logout">
			<button class="btn">Logout</button>
		</form>
	{/if}
</div>
