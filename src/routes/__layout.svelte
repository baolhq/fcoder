<script context="module">
	// For page transition
	export const load = async ({ url: { pathname } }) => ({
		props: { pathname }
	});
</script>

<script>
	import MenuIcon from '$lib/components/MenuIcon.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { isMobile, theme, blogList } from '../store.js';
	import { onMount } from 'svelte';

	export let pathname;

	onMount(() => {
		getTheme();
		document.documentElement.setAttribute('data-theme', $theme);

		isMobile.set(detectMobile());
	});

	// Fetch blogs metadata from blogs.json
	const fetchData = async () => {
		let response = await fetch('/blogs.json');
		let data = await response.json();
		blogList.set(Object.values(data));

		// Add slug to blog metadata
		let keyList = Object.keys(data);
		for (let i = 0; i < keyList.length; i++) {
			Object.assign($blogList[i], { slug: keyList[i] });
		}
	};

	// Detect if user is on mobile by navigator or screen width is below 500
	const detectMobile = () => {
		const toMatch = [
			/Android/i,
			/webOS/i,
			/iPhone/i,
			/iPad/i,
			/iPod/i,
			/BlackBerry/i,
			/Windows Phone/i
		];

		return toMatch.some((toMatchItem) => {
			return navigator.userAgent.match(toMatchItem) || window.innerWidth <= 500;
		});
	};

	const getTheme = () => {
		let localTheme = localStorage.getItem('theme');
		if (localTheme === null || localTheme === 'dark') {
			localStorage.setItem('theme', 'dark');
			theme.set('dark');
		} else {
			theme.set('light');
		}
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="/global.css" />
</svelte:head>

<MenuIcon />
<Menu />

<main>
	{#await fetchData()}
		<Spinner />
	{:then}
		<PageTransition {pathname}>
			<slot />
		</PageTransition>
	{/await}
</main>

<style>
	main {
		width: 50%;
		margin: auto;
		margin-top: 2rem;
	}
	@media screen and (max-width: 500px) {
		main {
			width: 65%;
		}
	}
</style>
