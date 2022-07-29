<script>
  import { page } from "$app/stores";
  import { getChallenge } from "$lib/scripts/db";
  import Spinner from "$lib/components/Spinner.svelte";
  import TypingBox from "$lib/components/TypingBox.svelte";

  let title = "";
  let challenge;

  const fetchChallenge = async () => {
    let res = await getChallenge($page.params.slug);
    title = res.data().title;
    return res.data();
  };
</script>

<svelte:head>
  <title>Challenge {title} - FCoder</title>
</svelte:head>

{#await fetchChallenge()}
  <Spinner />
{:then challenge}
  <div class="container">
    <TypingBox
      sample={challenge.content}
      isChallenge={true}
      title={challenge.title}
    />
  </div>
{/await}
