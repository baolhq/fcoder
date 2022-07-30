import { c as create_ssr_component, a as subscribe, e as escape, i as is_promise, n as noop, v as validate_component } from "../../../../immutable/chunks/index-e5660c7e.js";
import { p as page } from "../../../../immutable/chunks/stores-a24bc3ab.js";
import { b as getChallenge } from "../../../../immutable/chunks/db-7773c137.js";
import { S as Spinner } from "../../../../immutable/chunks/Spinner-e13eff88.js";
import { T as TypingBox } from "../../../../immutable/chunks/TypingBox-c9eed7d3.js";
import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
/* empty css                                                                           */const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let title = "";
  const fetchChallenge = async () => {
    let res = await getChallenge($page.params.slug);
    title = res.title;
    return res;
  };
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Challenge ${escape(title)} - FCoder</title>`, ""}`, ""}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
  ${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
`;
    }
    return function(challenge) {
      return `
  <div class="${"container"}">${validate_component(TypingBox, "TypingBox").$$render($$result, {
        sample: challenge.content,
        isChallenge: true,
        title: challenge.title
      }, {}, {})}</div>
`;
    }(__value);
  }(fetchChallenge())}`;
});
export {
  U5Bslugu5D as default
};
