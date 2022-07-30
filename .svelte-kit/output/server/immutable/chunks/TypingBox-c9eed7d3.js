import { c as create_ssr_component } from "./index-e5660c7e.js";
const TypingBox_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-sq2wwh{height:95vh;display:flex;justify-content:center;align-items:center}.form.svelte-sq2wwh{position:relative;margin:auto;height:40%;width:100%}.content.svelte-sq2wwh,input.svelte-sq2wwh,label.svelte-sq2wwh{position:absolute;width:100%;left:0;border:3px solid var(--surface);padding:12px;font-family:"Poppins", sans-serif}.content.svelte-sq2wwh{top:0;font-size:1.2em;word-spacing:0.2em;letter-spacing:0.04em;overflow-y:scroll;height:calc(100% - 86px);color:var(--subtext);border-radius:12px 12px 0 0;user-select:none}input.svelte-sq2wwh{bottom:0;outline:none;font-size:1.2em;color:var(--fg);transition:border-color 0.4s ease;border-radius:0 0 12px 12px;background:none}input.svelte-sq2wwh:focus,input.svelte-sq2wwh:active{border-color:var(--subtext)}label.svelte-sq2wwh{bottom:0;border-radius:0 0 12px 12px;font-size:1.2em;color:var(--surface)}',
  map: null
};
const TypingBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sample = "" } = $$props;
  let { isChallenge = false } = $$props;
  let { title = "" } = $$props;
  let content = "";
  let placeholder = "";
  if ($$props.sample === void 0 && $$bindings.sample && sample !== void 0)
    $$bindings.sample(sample);
  if ($$props.isChallenge === void 0 && $$bindings.isChallenge && isChallenge !== void 0)
    $$bindings.isChallenge(isChallenge);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="${"container svelte-sq2wwh"}"><div class="${"form svelte-sq2wwh"}"><div class="${"content svelte-sq2wwh"}"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div>
    <label for="${"typer"}" class="${"svelte-sq2wwh"}"><!-- HTML_TAG_START -->${placeholder}<!-- HTML_TAG_END --></label>
    <input type="${"text"}" id="${"typer"}" class="${"svelte-sq2wwh"}"></div>
</div>`;
});
export {
  TypingBox as T
};
