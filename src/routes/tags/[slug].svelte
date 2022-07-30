<script>
  import BlogCard from "$lib/components/BlogCard.svelte";
  import { page } from "$app/stores";
  import { getBlogs } from "$lib/scripts/db";

  let tag = $page.params.slug;

  const fetchData = async () => {
    let res = await getBlogs();
    let blogs = filterByTag(tag, res);
    return blogs;
  };

  // Filter blogs by tag
  const filterByTag = (tagFilter, blogs) => {
    if (!tagFilter) return blogs;

    let result = [];
    blogs.forEach((blog) => {
      let isContainsTag = false;

      blog.tags.forEach((tag) => {
        if (tag === tagFilter) {
          isContainsTag = true;
        }
      });

      if (isContainsTag) {
        result.push(blog);
      }
    });
    return result;
  };
</script>

<svelte:head>
  <title>Tagged with "{tag}" - FCoder</title>
</svelte:head>

{#await fetchData() then blogs}
  {#each blogs as blog}
    <BlogCard slug={blog.slug} title={blog.title} />
  {/each}
{/await}
