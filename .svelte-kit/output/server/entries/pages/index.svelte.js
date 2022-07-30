import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, f as each } from "../../immutable/chunks/index-e5660c7e.js";
import { B as BlogCard } from "../../immutable/chunks/BlogCard-f9a6b83a.js";
import { S as Spinner } from "../../immutable/chunks/Spinner-e13eff88.js";
import { a as getBlogs } from "../../immutable/chunks/db-7773c137.js";
/* empty css                                                                     */import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fetchBlogs = async () => {
    let res = await getBlogs();
    return res;
  };
  return `${$$result.head += `${$$result.title = `<title>FCoder</title>`, ""}`, ""}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
  ${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
`;
    }
    return function(blogList) {
      return `
  ${each(blogList, (blog) => {
        return `${validate_component(BlogCard, "BlogCard").$$render($$result, { slug: blog.slug, title: blog.title }, {}, {})}`;
      })}
`;
    }(__value);
  }(fetchBlogs())}`;
});
export {
  Routes as default
};
