<script context="module">
	// Get error status and message from props
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				message: error.message
			}
		};
	}
</script>

<script>
	export let status;
	export let message;
</script>

<svelte:head>
	<title>{message}</title>
</svelte:head>

<div class="container">
	<h1>{status}</h1>
	<h2>{message}</h2>
</div>

<style>
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	h1 {
		font-size: 8em;
		line-height: 0;
	}
</style>
