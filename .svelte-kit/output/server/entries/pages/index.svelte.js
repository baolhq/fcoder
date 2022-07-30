import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, f as each } from "../../_app/immutable/chunks/index-d4ff654f.js";
import { B as BlogCard } from "../../_app/immutable/chunks/BlogCard-afe02a33.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-5f31738a.js";
import { a as getBlogs } from "../../_app/immutable/chunks/db-c16fef50.js";
/* empty css                                                                          */import "firebase/app";
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
