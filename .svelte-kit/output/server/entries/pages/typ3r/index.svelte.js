import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component } from "../../../_app/immutable/chunks/index-d4ff654f.js";
import { T as TypingBox } from "../../../_app/immutable/chunks/TypingBox-830d9764.js";
import { S as Spinner } from "../../../_app/immutable/chunks/Spinner-5f31738a.js";
/* empty css                                                                             */let randomApi = "https://api.quotable.io/random";
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
