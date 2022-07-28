<script>
  import BlogCard from "$lib/components/BlogCard.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { blogList } from "../../store.js";

  let blogs = [];
  let tag = $page.params.slug;

  onMount(async () => {
    // If blog list is empty fetch from db
    if ($blogList.length === 0) await fetchData();

    blogs = filterByTag(tag, $blogList);
  });

  const fetchData = async () => {
    let response = await fetch("/blogs.json");
    let data = await response.json();
    blogList.set(Object.values(data));

    let keyList = Object.keys(data);
    for (let i = 0; i < keyList.length; i++) {
      Object.assign($blogList[i], { slug: keyList[i] });
    }
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

{#each blogs as blog}
  <BlogCard slug={blog.slug} title={blog.title} />
{/each}
