<script>
  import { fade } from "svelte/transition";

  export let slug;
  export let title;
</script>

<a href="/blog/{slug}?title={title}" in:fade={{ duration: 400 }}>
  <span># {title}</span>
</a>

<style>
  a {
    text-decoration: none;
    font-size: 1.2em;
    color: var(--fg);
    transition: color 0.4s ease;
    display: block;
    margin-bottom: 0.75rem;
    padding: 14px;
    padding-left: 6px;
    border-radius: 12px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: var(--card-bg);
  }
  a:hover,
  a:focus {
    color: var(--link);
  }
  span {
    border: 4px solid transparent;
    display: block;
    padding-left: 14px;
    width: 100%;
    transition: border 0.4s ease;
  }
  span:hover,
  a:focus span {
    border-left: 4px solid var(--link);
  }
</style>
