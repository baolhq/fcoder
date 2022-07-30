import { c as create_ssr_component } from "./index-e5660c7e.js";
/* empty css                                                */const css = {
  code: ".loader-spinner.svelte-l8mfs8.svelte-l8mfs8{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:150px;height:150px}.loader-spinner.svelte-l8mfs8 svg.svelte-l8mfs8{width:90%;fill:none}.load.svelte-l8mfs8.svelte-l8mfs8{transform-origin:50% 50%;stroke-dasharray:0.7 0.3;stroke-linecap:round;stroke-width:3px;stroke:var(--fg)}.load.one.svelte-l8mfs8.svelte-l8mfs8{animation:svelte-l8mfs8-load 1.5s infinite ease-in;animation-direction:reverse}.load.two.svelte-l8mfs8.svelte-l8mfs8{fill:var(--fg)}.load.three.svelte-l8mfs8.svelte-l8mfs8{animation:svelte-l8mfs8-load 1.5s infinite}@keyframes svelte-l8mfs8-load{100%{transform:rotate(360deg)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loader-spinner svelte-l8mfs8"}"><svg viewBox="${"0 0 120 120"}" class="${"svelte-l8mfs8"}"><circle class="${"load one svelte-l8mfs8"}" cx="${"60"}" cy="${"60"}" r="${"20"}" pathLength="${"1"}"></circle><circle class="${"load two svelte-l8mfs8"}" cx="${"60"}" cy="${"60"}" r="${"10"}"></circle><circle class="${"load three svelte-l8mfs8"}" cx="${"60"}" cy="${"60"}" r="${"30"}" pathLength="${"1"}"></circle></svg>
</div>`;
});
export {
  Spinner as S
};
