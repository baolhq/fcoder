import { c as create_ssr_component, a as subscribe, e as escape, i as is_promise, n as noop, v as validate_component } from "../../../../_app/immutable/chunks/index-d4ff654f.js";
import { p as page } from "../../../../_app/immutable/chunks/stores-4971bce0.js";
import { b as getChallenge } from "../../../../_app/immutable/chunks/db-c16fef50.js";
import { S as Spinner } from "../../../../_app/immutable/chunks/Spinner-5f31738a.js";
import { T as TypingBox } from "../../../../_app/immutable/chunks/TypingBox-830d9764.js";
import "firebase/app";
import "firebase/firestore/lite";
import "firebase/storage";
/* empty css                                                                                */const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  <div class="${"container"}">${validate_component(TypingBox, "TypingBox").$$render(
        $$result,
        {
          sample: challenge.content,
          isChallenge: true,
          title: challenge.title
        },
        {},
        {}
      )}</div>
`;
    }(__value);
  }(fetchChallenge())}`;
});
export {
  U5Bslugu5D as default
};
