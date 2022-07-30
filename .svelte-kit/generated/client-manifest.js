export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/blog/[slug].svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/tags/[slug].svelte"),
	() => import("../../src/routes/tags/index.svelte"),
	() => import("../../src/routes/typ3r/[slug].svelte"),
	() => import("../../src/routes/typ3r/challenge/[slug].svelte"),
	() => import("../../src/routes/typ3r/challenge/index.svelte"),
	() => import("../../src/routes/typ3r/challenge/score.svelte"),
	() => import("../../src/routes/typ3r/index.svelte"),
	() => import("../../src/routes/typ3r/score.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 2], [1]],
	"tags": [[0, 6], [1]],
	"typ3r": [[0, 11], [1]],
	"typ3r/challenge": [[0, 9], [1]],
	"typ3r/score": [[0, 12], [1]],
	"typ3r/challenge/score": [[0, 10], [1]],
	"typ3r/challenge/[slug]": [[0, 8], [1]],
	"blog/[slug]": [[0, 3], [1]],
	"tags/[slug]": [[0, 5], [1]],
	"typ3r/[slug]": [[0, 7], [1]]
};