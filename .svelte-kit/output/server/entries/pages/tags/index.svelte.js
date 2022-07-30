import { c as create_ssr_component, f as each, e as escape } from "../../../_app/immutable/chunks/index-d4ff654f.js";
import "../../../_app/immutable/chunks/db-c16fef50.js";
import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1j33nt8{width:100%}a.svelte-1j33nt8{padding:8px 12px;margin:8px;border-radius:10px;display:inline-block;text-decoration:none;color:var(--fg);transition:background 0.4s ease, color 0.4s ease}a.svelte-1j33nt8:hover{background:var(--fg);color:var(--bg)}",
  map: null
};
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tagList = [];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Tags - FCoder</title>`, ""}`, ""}

<div class="${"container svelte-1j33nt8"}">${each(tagList, (tag) => {
    return `<a href="${"/tags/" + escape(tag, true)}" class="${"svelte-1j33nt8"}">#${escape(tag)}</a>`;
  })}
</div>`;
});
export {
  Tags as default
};
