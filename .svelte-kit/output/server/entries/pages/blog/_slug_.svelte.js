import { c as create_ssr_component, a as subscribe, e as escape, i as is_promise, n as noop, v as validate_component } from "../../../immutable/chunks/index-e5660c7e.js";
import { p as page } from "../../../immutable/chunks/stores-a24bc3ab.js";
import { marked } from "marked";
import { g as getBlog } from "../../../immutable/chunks/db-7773c137.js";
import { S as Spinner } from "../../../immutable/chunks/Spinner-e13eff88.js";
import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
/* empty css                                                                        */const _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: '#title.svelte-rhc0jx{font-family:"Lora", serif;font-size:2.5em}.container.svelte-rhc0jx{margin-top:2.5rem;min-height:100%}img{max-width:100%;height:auto}a{text-decoration:none;transition:color 0.4s ease;color:var(--link)}a:hover{text-decoration:underline}hr{background:var(--surface);border:none;height:2px}pre{background:var(--surface);padding:10px 16px;border-radius:12px;overflow-x:scroll}code{background:var(--surface);padding:0 4px;border-radius:4px;font-family:"Poppins", monospace}table, tr, td, th{border:1px solid var(--surface);border-collapse:collapse}td, th{padding:4px 12px}th{text-align:center}input, button{background:transparent;font-size:1em;border:1px solid var(--surface);color:var(--fg);padding:8px}button:hover, input[type="submit"]{cursor:pointer}',
  map: null
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slug = $page.params.slug;
  let title = $page.url.searchParams.get(`title`);
  const fetchContent = async () => {
    let content = await getBlog(slug);
    return content;
  };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)} - FCoder</title>`, ""}`, ""}

<h1 id="${"title"}" class="${"svelte-rhc0jx"}">${escape(title)}</h1>
<div class="${"container svelte-rhc0jx"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    ${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
  `;
    }
    return function(content) {
      return `
    <div><!-- HTML_TAG_START -->${marked.parse(content)}<!-- HTML_TAG_END --></div>
  `;
    }(__value);
  }(fetchContent())}
</div>`;
});
export {
  U5Bslugu5D as default
};
