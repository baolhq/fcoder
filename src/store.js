import { writable } from "svelte/store";

export const isMenuOpen = writable(false);
export const isMobile = writable(false);
export const theme = writable("dark");

// Typ3r
export const tpScore = writable(0);
export const tpSeconds = writable(0);
export const tpCorrectWords = writable(0);
export const tpWrongWords = writable(0);
