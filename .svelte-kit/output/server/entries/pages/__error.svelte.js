import { c as create_ssr_component, e as escape } from "../../_app/immutable/chunks/index-d4ff654f.js";
const __error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-e9ns1s{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}h1.svelte-e9ns1s{font-size:8em;line-height:0}",
  map: null
};
function load({ error, status }) {
  return {
    props: { status, message: error.message }
  };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { message } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(message)}</title>`, ""}`, ""}

<div class="${"container svelte-e9ns1s"}"><h1 class="${"svelte-e9ns1s"}">${escape(status)}</h1>
	<h2>${escape(message)}</h2>
</div>`;
});
export {
  _error as default,
  load
};
