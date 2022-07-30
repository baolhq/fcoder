import { c as create_ssr_component, b as add_attribute } from "../../../../_app/immutable/chunks/index-d4ff654f.js";
import "../../../../_app/immutable/chunks/db-c16fef50.js";
import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-150j087{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}h1.svelte-150j087{text-align:center;font-size:4em;margin:2rem}.wrapper.svelte-150j087{position:relative;border:2px solid var(--surface);border-radius:6px;padding:0.5rem;display:flex;align-items:center;transition:border 0.4s ease}.wrapper.svelte-150j087:focus-within{border:2px solid var(--subtext)}input.svelte-150j087{background:none;border:none;outline:none;font-size:1.2em;padding-right:3rem;height:2rem;color:var(--fg)}ion-icon.svelte-150j087{font-size:1.2em;height:2rem;position:absolute;right:0;margin-right:1rem;transition:color 0.4s ease}ion-icon.error.svelte-150j087{color:var(--red)}ion-icon.success.svelte-150j087{color:var(--link)}ion-icon.loading.svelte-150j087{animation:svelte-150j087-spin 2s infinite;transform-origin:center}@keyframes svelte-150j087-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Challenge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputVal = "";
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Challenge - FCoder</title>`, ""}`, ""}

<div class="${"container svelte-150j087"}"><h1 class="${"svelte-150j087"}">Challenge</h1>
  <div class="${"wrapper svelte-150j087"}"><input type="${"text"}" id="${"code"}" placeholder="${"Enter code here"}" class="${"svelte-150j087"}"${add_attribute("value", inputVal, 0)}>

    ${`${`${``}`}`}</div>
</div>`;
});
export {
  Challenge as default
};
