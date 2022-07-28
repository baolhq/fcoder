<script>
	import { fade } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fade={{ duration: 400, delay: 400 }} out:fade={{ duration: 400 }}>
		<slot />
	</div>
{/key}
