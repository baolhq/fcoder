<script>
  import BlogCard from "$lib/components/BlogCard.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { getBlogs } from "$lib/scripts/db";

  const fetchBlogs = async () => {
    let res = await getBlogs();
    return res;
  };
</script>

<svelte:head>
  <title>FCoder</title>
</svelte:head>

{#await fetchBlogs()}
  <Spinner />
{:then blogList}
  {#each blogList as blog}
    <BlogCard slug={blog.slug} title={blog.title} />
  {/each}
{/await}
