<script>
  import { onMount, tick } from "svelte";
  import { goto } from "$app/navigation";
  import { getChallenge } from "$lib/scripts/db";

  let status = "not-validated";
  let inputVal = "";
  let challenges = [];
  const baseURL = "";

  onMount(async () => {
    await tick();

    let codeInput = document.querySelector("#code");
    codeInput.focus();
  });

  const fetchChallenge = async (code) => {
    return await getChallenge(code);
  };

  const handleKeyUp = async (e) => {
    if (e.key === "Enter") {
      gotoChallenge();
      return;
    }

    status = "loading";
    let challenge = await fetchChallenge(inputVal);
    if (!challenge) status = "error";
    else status = "success";
  };

  const gotoChallenge = () => {
    if (status !== "success") return;
    goto(`/typ3r/challenge/${inputVal}`);
  };
</script>

<svelte:head>
  <title>Challenge - FCoder</title>
</svelte:head>

<div class="container">
  <div class="wrapper">
    <input
      type="text"
      id="code"
      bind:value={inputVal}
      placeholder="Enter challenge code here"
      on:keyup={(e) => handleKeyUp(e)}
    />

    {#if status === "loading"}
      <ion-icon class={status} name="reload-outline" />
    {:else if status === "error"}
      <ion-icon class={status} name="alert-outline" />
    {:else if status === "success"}
      <ion-icon class={status} name="checkmark-done-outline" />
    {/if}
  </div>
</div>

<style>
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .wrapper {
    position: relative;
    border: 2px solid var(--surface);
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    transition: border 0.4s ease;
  }
  .wrapper:focus-within {
    border: 2px solid var(--subtext);
  }
  input {
    background: none;
    border: none;
    outline: none;
    font-size: 1.2em;
    padding-right: 3rem;
    height: 2rem;
    color: var(--fg);
  }
  ion-icon {
    font-size: 1.2em;
    height: 2rem;
    position: absolute;
    right: 0;
    margin-right: 1rem;
    transition: color 0.4s ease;
  }
  ion-icon.error {
    color: var(--red);
  }
  ion-icon.success {
    color: var(--link);
  }
  ion-icon.loading {
    animation: spin 2s infinite;
    transform-origin: center;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
