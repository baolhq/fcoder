<script>
  import TypingBox from "$lib/components/TypingBox.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { onMount } from "svelte";
  import {
    tpScore,
    tpSeconds,
    tpCorrectWords,
    tpWrongWords,
  } from "../../store.js";

  let randomApi = "https://api.quotable.io/random";
  let seconds;
  let score = 0;
  let correctWords = 0;
  let wrongWords = 0;

  // Reset score
  onMount(() => {
    tpScore.set(0);
    tpSeconds.set(0);
    tpCorrectWords.set(0);
    tpWrongWords.set(0);
  });

  const fetchRandomQuote = async () => {
    let res = await fetch(randomApi);
    let data = await res.json();
    return data.content;
  };
</script>

<svelte:head>
  <title>Typ3r - FCoder</title>
</svelte:head>

{#await fetchRandomQuote()}
  <Spinner />
{:then sample}
  <TypingBox {sample} />
{/await}
