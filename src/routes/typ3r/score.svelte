<script>
  import { onMount, tick, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import {
    theme,
    tpScore,
    tpSeconds,
    tpCorrectWords,
    tpWrongWords,
  } from "../../store.js";

  let wpm = 0;
  let showHint = false;
  let animationTimer = null;
  let timerRunning = false;

  // Redrawing canvas on theme change
  $: $theme, playArcAnimation();

  onMount(async () => {
    await tick();
    let canvas = document.querySelector("#canvas");

    playArcAnimation();

    document.addEventListener("keydown", (e) => {
      // Reset the test
      if (e.key === "Tab") {
        e.preventDefault();
        goto(`/typ3r`);
      }
      // Prevent f5 on this page because it may lead to losing data
      if (e.key === "F5" && $page.url.pathname === "/typ3r/score") {
        e.preventDefault();
        playArcAnimation();
      }
    });

    // Show hint after 1 second
    setTimeout(() => {
      showHint = true;
    }, 1000);
  });

  onDestroy(() => clearInterval(animationTimer));

  const playArcAnimation = () => {
    // Stop running animation
    if (timerRunning) clearInterval(animationTimer);

    let wpm = calculateWpm();
    let wpmCurrent = 0;
    let current = 0.75 * Math.PI; // Start from bottom left
    let arcLength = (wpm / 200) * 1.5 + 0.75;
    let end = arcLength * Math.PI;

    timerRunning = true;
    animationTimer = setInterval(() => {
      drawArc(wpmCurrent, canvas, current);
      current += end / 360;
      if (wpmCurrent < wpm) wpmCurrent++;

      if (current >= end) {
        clearInterval(animationTimer);
        timerRunning = false;
      }
    }, 10);
  };

  const drawArc = (wpm, canvas, angleEnd) => {
    let ctx = canvas.getContext("2d");
    let angleStart = 0.75 * Math.PI; // Draw from bottom left

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = 150,
      y = 108,
      radius = 100;

    // Draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, angleStart, 2.25 * Math.PI);
    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#45475a";
    ctx.stroke();

    // Draw arc
    ctx.beginPath();
    ctx.arc(x, y, radius, angleStart, angleEnd);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#89b4fa";
    ctx.stroke();

    // Draw WPM
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
</script>

<svelte:head>
  <title>Score - FCoder</title>
</svelte:head>

<div class="container">
  <canvas id="canvas" width="300" height="209">
    Sorry, you browser does not support canvas.
  </canvas>

  <h3>
    <span>Correct:</span>
    <span>{$tpCorrectWords} {$tpCorrectWords > 1 ? "words" : "word"}</span>
  </h3>
  <h3>
    <span>Wrong:</span>
    <span>{$tpWrongWords} {$tpWrongWords > 1 ? "words" : "word"}</span>
  </h3>
  <h3>
    <span>Time:</span>
    <span>{$tpSeconds} secs</span>
  </h3>
  {#if showHint}
    <p in:fade={{ duration: 400 }}>
      Press <code>Tab</code> to restart the test
    </p>
  {:else}
    <p><code class="placeholder" /></p>
  {/if}
</div>

<style>
  .container {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  canvas {
    margin: auto;
  }
  h3 {
    display: flex;
    justify-content: space-between;
  }
  p {
    color: var(--surface);
    text-align: center;
    margin-top: 3rem;
  }
  code {
    padding: 2px 8px;
    background: none;
  }
  code:not(.placeholder) {
    background: var(--surface);
    color: var(--subtext);
    border-radius: 4px;
  }
</style>
