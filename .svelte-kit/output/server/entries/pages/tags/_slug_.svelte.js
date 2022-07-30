import { c as create_ssr_component, a as subscribe, e as escape, i as is_promise, n as noop, f as each, v as validate_component } from "../../../immutable/chunks/index-e5660c7e.js";
import { B as BlogCard } from "../../../immutable/chunks/BlogCard-f9a6b83a.js";
import { p as page } from "../../../immutable/chunks/stores-a24bc3ab.js";
import { a as getBlogs } from "../../../immutable/chunks/db-7773c137.js";
import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let tag = $page.params.slug;
  const fetchData = async () => {
    let res = await getBlogs();
    let blogs = filterByTag(tag, res);
    return blogs;
  };
  const filterByTag = (tagFilter, blogs) => {
    if (!tagFilter)
      return blogs;
    let result = [];
    blogs.forEach((blog) => {
      let isContainsTag = false;
      blog.tags.forEach((tag2) => {
        if (tag2 === tagFilter) {
          isContainsTag = true;
        }
      });
      if (isContainsTag) {
        result.push(blog);
      }
    });
    return result;
  };
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Tagged with &quot;${escape(tag)}&quot; - FCoder</title>`, ""}`, ""}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(blogs) {
      return `
  ${each(blogs, (blog) => {
        return `${validate_component(BlogCard, "BlogCard").$$render($$result, { slug: blog.slug, title: blog.title }, {}, {})}`;
      })}
`;
    }(__value);
  }(fetchData())}`;
});
export {
  U5Bslugu5D as default
};
