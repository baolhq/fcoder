<script>
	import { fade } from 'svelte/transition';
</script>

<div class="loader-spinner" out:fade={{ duration: 400 }}>
	<svg viewBox="0 0 120 120">
		<circle class="load one" cx="60" cy="60" r="20" pathLength="1" />
		<circle class="load two" cx="60" cy="60" r="10" />
		<circle class="load three" cx="60" cy="60" r="30" pathLength="1" />
	</svg>
</div>

<style>
	.loader-spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 150px;
		height: 150px;
	}
	.loader-spinner svg {
		width: 90%;
		fill: none;
	}

	.load {
		transform-origin: 50% 50%;
		stroke-dasharray: 0.7 0.3;
		stroke-linecap: round;
		stroke-width: 3px;
		stroke: var(--fg);
	}
	.load.one {
		animation: load 1.5s infinite ease-in;
		animation-direction: reverse;
	}
	.load.two {
		fill: var(--fg);
	}
	.load.three {
		animation: load 1.5s infinite;
	}

	@keyframes load {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
