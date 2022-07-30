import { c as create_ssr_component, a as subscribe, e as escape, i as is_promise, n as noop, f as each, v as validate_component } from "../../../_app/immutable/chunks/index-d4ff654f.js";
import { B as BlogCard } from "../../../_app/immutable/chunks/BlogCard-afe02a33.js";
import { p as page } from "../../../_app/immutable/chunks/stores-4971bce0.js";
import { a as getBlogs } from "../../../_app/immutable/chunks/db-c16fef50.js";
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
