import { c as create_ssr_component, e as escape } from "./index-e5660c7e.js";
const BlogCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-111fm0t.svelte-111fm0t{text-decoration:none;font-size:1.2em;color:var(--fg);transition:color 0.4s ease;display:block;margin-bottom:0.75rem;padding:14px;padding-left:6px;border-radius:12px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);background:var(--card-bg)}a.svelte-111fm0t.svelte-111fm0t:hover,a.svelte-111fm0t.svelte-111fm0t:focus{color:var(--link)}span.svelte-111fm0t.svelte-111fm0t{border:4px solid transparent;display:block;padding-left:14px;width:100%;transition:border 0.4s ease}span.svelte-111fm0t.svelte-111fm0t:hover,a.svelte-111fm0t:focus span.svelte-111fm0t{border-left:4px solid var(--link)}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slug } = $$props;
  let { title } = $$props;
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<a href="${"/blog/" + escape(slug, true) + "?title=" + escape(title, true)}" class="${"svelte-111fm0t"}"><span class="${"svelte-111fm0t"}"># ${escape(title)}</span>
</a>`;
});
export {
  BlogCard as B
};
