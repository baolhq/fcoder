import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component } from "../../../immutable/chunks/index-e5660c7e.js";
import { T as TypingBox } from "../../../immutable/chunks/TypingBox-c9eed7d3.js";
import { S as Spinner } from "../../../immutable/chunks/Spinner-e13eff88.js";
/* empty css                                                                        */let randomApi = "https://api.quotable.io/random";
const Typ3r = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fetchRandomQuote = async () => {
    let res = await fetch(randomApi);
    let data = await res.json();
    return data.content;
  };
  return `${$$result.head += `${$$result.title = `<title>Typ3r - FCoder</title>`, ""}`, ""}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
  ${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
`;
    }
    return function(sample) {
      return `
  ${validate_component(TypingBox, "TypingBox").$$render($$result, { sample }, {}, {})}
`;
    }(__value);
  }(fetchRandomQuote())}`;
});
export {
  Typ3r as default
};
