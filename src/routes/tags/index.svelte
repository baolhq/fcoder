<script>
  import { onMount } from "svelte";
  import { getBlogs } from "$lib/scripts/db";

  let tagList = [];
  onMount(async () => {
    tagList = await fetchTagList();
  });

  // Fetch tag list from blog.json and return array of tags
  const fetchTagList = async () => {
    let res = await getBlogs();
    let result = [];

    res.forEach((blog) => {
      blog.tags.forEach((tag) => {
        // Only add non-existing tag
        if (!result.includes(tag)) result = [...result, tag];
      });
    });
    return result;
  };

  const randomizeFontSize = (elem) => {
    let fontSize = Math.floor(Math.random() * (20 - 10 + 1)) + 15;
    elem.style.fontSize = `${fontSize}px`;
  };
</script>

<svelte:head>
  <title>Tags - FCoder</title>
</svelte:head>

<div class="container">
  {#each tagList as tag}
    <a use:randomizeFontSize href="/tags/{tag}">#{tag}</a>
  {/each}
</div>

<style>
  .container {
    width: 100%;
  }
  a {
    padding: 8px 12px;
    margin: 8px;
    border-radius: 10px;
    display: inline-block;
    text-decoration: none;
    color: var(--fg);
    transition: background 0.4s ease, color 0.4s ease;
  }
  a:hover {
    background: var(--fg);
    color: var(--bg);
  }
</style>
