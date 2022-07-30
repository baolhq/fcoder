import { c as create_ssr_component, a as subscribe, o as onDestroy, e as escape } from "../../../../immutable/chunks/index-e5660c7e.js";
import { p as page } from "../../../../immutable/chunks/stores-a24bc3ab.js";
import { b as tpSeconds, c as tpScore, t as theme, d as tpCorrectWords, e as tpWrongWords } from "../../../../immutable/chunks/store-7be1707a.js";
const score_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1954ojp{width:300px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}canvas.svelte-1954ojp{margin:auto}h3.svelte-1954ojp{display:flex;justify-content:space-between}p.svelte-1954ojp{color:var(--subtext);text-align:center;margin-top:3rem}code.svelte-1954ojp{padding:2px 8px;background:none}code.svelte-1954ojp:not(.placeholder){background:var(--surface);color:var(--subtext);border-radius:4px}",
  map: null
};
const Score = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tpSeconds, $$unsubscribe_tpSeconds;
  let $tpScore, $$unsubscribe_tpScore;
  let $theme, $$unsubscribe_theme;
  let $page, $$unsubscribe_page;
  let $tpCorrectWords, $$unsubscribe_tpCorrectWords;
  let $tpWrongWords, $$unsubscribe_tpWrongWords;
  $$unsubscribe_tpSeconds = subscribe(tpSeconds, (value) => $tpSeconds = value);
  $$unsubscribe_tpScore = subscribe(tpScore, (value) => $tpScore = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_tpCorrectWords = subscribe(tpCorrectWords, (value) => $tpCorrectWords = value);
  $$unsubscribe_tpWrongWords = subscribe(tpWrongWords, (value) => $tpWrongWords = value);
  let animationTimer = null;
  let timerRunning = false;
  $page.url.searchParams.get("title");
  onDestroy(() => clearInterval(animationTimer));
  const playArcAnimation = () => {
    if (timerRunning)
      clearInterval(animationTimer);
    let wpm = calculateWpm();
    let wpmCurrent = 0;
    let current = 0.75 * Math.PI;
    let arcLength = wpm / 200 * 1.5 + 0.75;
    let end = arcLength * Math.PI;
    timerRunning = true;
    animationTimer = setInterval(() => {
      drawArc(wpmCurrent, canvas, current);
      current += end / 360;
      if (wpmCurrent < wpm)
        wpmCurrent++;
      if (current >= end) {
        clearInterval(animationTimer);
        timerRunning = false;
      }
    }, 10);
  };
  const drawArc = (wpm, canvas2, angleEnd) => {
    let ctx = canvas2.getContext("2d");
    let angleStart = 0.75 * Math.PI;
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    let x = 150, y = 108, radius = 100;
    ctx.beginPath();
    ctx.arc(x, y, radius, angleStart, 2.25 * Math.PI);
    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#45475a";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, radius, angleStart, angleEnd);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#89b4fa";
    ctx.stroke();
    ctx.font = "4em Poppins";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = $theme === "dark" ? "#cdd6f4" : "#1e1e2e";
    ctx.fillText(wpm, x, y);
    ctx.stroke();
    ctx.font = "2em Poppins";
    ctx.fillText("WPM", x, y + 55);
    ctx.stroke();
  };
  const calculateWpm = () => {
    let wordsPerSec = $tpScore / $tpSeconds;
    return Math.round(wordsPerSec * 60);
  };
  $$result.css.add(css);
  {
    playArcAnimation();
  }
  $$unsubscribe_tpSeconds();
  $$unsubscribe_tpScore();
  $$unsubscribe_theme();
  $$unsubscribe_page();
  $$unsubscribe_tpCorrectWords();
  $$unsubscribe_tpWrongWords();
  return `${$$result.head += `${$$result.title = `<title>Challenge Score - FCoder</title>`, ""}`, ""}

<div class="${"container svelte-1954ojp"}"><canvas id="${"canvas"}" width="${"300"}" height="${"209"}" class="${"svelte-1954ojp"}">Sorry, you browser does not support canvas.
  </canvas>

  <h3 class="${"svelte-1954ojp"}"><span>Correct:</span>
    <span>${escape($tpCorrectWords)} ${escape($tpCorrectWords > 1 ? "words" : "word")}</span></h3>
  <h3 class="${"svelte-1954ojp"}"><span>Wrong:</span>
    <span>${escape($tpWrongWords)} ${escape($tpWrongWords > 1 ? "words" : "word")}</span></h3>
  <h3 class="${"svelte-1954ojp"}"><span>Time:</span>
    <span>${escape($tpSeconds)} secs</span></h3>
  ${`<p class="${"svelte-1954ojp"}"><code class="${"placeholder svelte-1954ojp"}"></code></p>`}
</div>`;
});
export {
  Score as default
};
