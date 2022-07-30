import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../_app/immutable/chunks/index-d4ff654f.js";
import { i as isMenuOpen, t as theme, a as isMobile } from "../../_app/immutable/chunks/store-0760e45a.js";
/* empty css                                                                          */const MenuIcon_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".menu-icon.svelte-1h9xoav.svelte-1h9xoav{background-color:transparent;border:none;cursor:pointer;display:flex;padding:0;transform:scale(0.4);position:fixed;top:0;left:0}.line.svelte-1h9xoav.svelte-1h9xoav{fill:none;stroke:var(--fg);stroke-width:6;transition:stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),\n      stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1)}.line1.svelte-1h9xoav.svelte-1h9xoav{stroke-dasharray:60 207;stroke-width:6}.line2.svelte-1h9xoav.svelte-1h9xoav{stroke-dasharray:60 60;stroke-width:6}.line3.svelte-1h9xoav.svelte-1h9xoav{stroke-dasharray:60 207;stroke-width:6}.opened.svelte-1h9xoav .line1.svelte-1h9xoav{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}.opened.svelte-1h9xoav .line2.svelte-1h9xoav{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:6}.opened.svelte-1h9xoav .line3.svelte-1h9xoav{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}@media screen and (max-width: 500px){.menu-icon.svelte-1h9xoav.svelte-1h9xoav{display:none}}",
  map: null
};
const MenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  $$result.css.add(css$2);
  $$unsubscribe_isMenuOpen();
  return `<button class="${"menu-icon " + escape($isMenuOpen ? "opened" : "", true) + " svelte-1h9xoav"}"><svg width="${"100"}" height="${"100"}" viewBox="${"0 0 100 100"}"><path class="${"line line1 svelte-1h9xoav"}" d="${"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}"></path><path class="${"line line2 svelte-1h9xoav"}" d="${"M 20,50 H 80"}"></path><path class="${"line line3 svelte-1h9xoav"}" d="${"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}"></path></svg>
</button>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu.svelte-cjmq62{position:fixed;top:68px;left:30px;width:fit-content;display:flex;flex-direction:column}button.svelte-cjmq62{background:transparent;border:none}a.svelte-cjmq62,button.svelte-cjmq62{margin-top:18px;padding:0 8px}a.svelte-cjmq62:hover,button.svelte-cjmq62:hover{cursor:pointer}ion-icon.svelte-cjmq62{color:var(--fg);font-size:1.5em;pointer-events:none}@media screen and (max-width: 500px){.menu.svelte-cjmq62{top:0;left:12px}}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$result.css.add(css$1);
  $$unsubscribe_theme();
  $$unsubscribe_isMenuOpen();
  $$unsubscribe_isMobile();
  return `${$isMenuOpen || $isMobile ? `<div class="${"menu svelte-cjmq62"}"><a href="${"/"}" title="${"Home"}" class="${"svelte-cjmq62"}"><ion-icon name="${"home-outline"}" class="${"svelte-cjmq62"}"></ion-icon></a>
    <a href="${"/tags"}" title="${"Tags"}" class="${"svelte-cjmq62"}"><ion-icon name="${"pricetag-outline"}" class="${"svelte-cjmq62"}"></ion-icon></a>
    <a href="${"/typ3r"}" title="${"Typ3r"}" class="${"svelte-cjmq62"}"><ion-icon name="${"speedometer-outline"}" class="${"svelte-cjmq62"}"></ion-icon></a>
    <a href="${"/typ3r/challenge"}" title="${"Challenge"}" class="${"svelte-cjmq62"}"><ion-icon name="${"podium-outline"}" class="${"svelte-cjmq62"}"></ion-icon></a>
    <button title="${"Toggle Dark Mode"}" class="${"svelte-cjmq62"}"><ion-icon${add_attribute(
    "name",
    $theme === "light" ? "partly-sunny-outline" : "moon-outline",
    0
  )} class="${"svelte-cjmq62"}"></ion-icon></button>
    <a href="${"/about"}" title="${"About"}" class="${"svelte-cjmq62"}"><ion-icon name="${"help-outline"}" class="${"svelte-cjmq62"}"></ion-icon></a></div>` : ``}`;
});
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1kx001c{width:50%;margin:auto;margin-top:2rem}@media screen and (max-width: 500px){main.svelte-1kx001c{width:65%}}",
  map: null
};
const load = async ({ url: { pathname } }) => ({ props: { pathname } });
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  let { pathname } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"/global.css"}" data-svelte="svelte-rjabkg">`, ""}

${validate_component(MenuIcon, "MenuIcon").$$render($$result, {}, {}, {})}
${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}

<main class="${"svelte-1kx001c"}">${validate_component(PageTransition, "PageTransition").$$render($$result, { pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
</main>`;
});
export {
  _layout as default,
  load
};
