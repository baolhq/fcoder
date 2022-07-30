<script>
  import { onMount, tick } from "svelte";
  import { goto } from "$app/navigation";
  import { rot13 } from "$lib/scripts/utils";
  import {
    tpScore,
    tpSeconds,
    tpCorrectWords,
    tpWrongWords,
  } from "../../store.js";

  export let sample = "";
  // For challenge
  export let isChallenge = false;
  export let title = "";

  let content = "";
  let placeholder = "";
  let currentIndex = 0;
  let typer;
  let words = [];

  let startTime, endTime;

  onMount(async () => {
    const result = [];
    sample.split(" ").forEach((word, index) => {
      result.push(`<span class='word word-${index}'>${word}</span>`);
    });
    content = result.join(" ");

    placeholder = result[0];

    typer = document.querySelector("#typer");
    typer.focus();
    typer.addEventListener("keyup", (e) => handleKeyUp(e));
    typer.addEventListener("keydown", (e) => handleKeyDown(e));

    // Wait for text rendered
    await tick();
    words = document.querySelectorAll(".word");
    words[0].style.color = "var(--link)";

    // Reset key log
    localStorage.setItem("_l", "");
  });

  const handleKeyDown = (e) => {
    // Key log to detect cheating
    let keyLog = localStorage.getItem("_l");
    localStorage.setItem("_l", `${keyLog}${rot13(e.key)}`);
  };

  const handleKeyUp = (e) => {
    // Start timer
    if (e.key !== "Tab" && startTime === undefined) startTime = new Date();

    // Ignore meta keys
    if (e.key === "Alt" || e.key === "Control") return;

    let val = typer.value.trim();
    let currentWord = words[currentIndex];
    let prevWord = words[currentIndex - 1];

    // If spacebar is pressed, check for correction and clear input
    if (e.key === " ") {
      currentIndex++;

      // If spacebar is press at last word, show result
      if (currentIndex === words.length - 1) showResult();

      prevWord = currentWord;
      currentWord = words[currentIndex];

      if (val === prevWord.innerHTML) {
        prevWord.style.color = "var(--surface)";
        // Each character worth 0.2 score
        tpScore.update((v) => (v += prevWord.innerHTML.split("").length / 5));
        tpCorrectWords.update((v) => ++v);
      } else {
        prevWord.style.color = "var(--red)";
        tpWrongWords.update((v) => ++v);
      }

      // Highlight and scroll to next word
      currentWord.style.color = "var(--link)";
      currentWord.scrollIntoView({ behaviour: "smooth" });

      typer.value = "";
      placeholder = currentWord.innerHTML;
    } else {
      if (val === words[currentIndex].innerHTML) {
        // If typed correctly the last word, show result
        if (currentIndex === words.length - 2) {
          tpScore.update(
            (v) => (v += words[currentIndex].innerHTML.split("").length / 5)
          );
          tpCorrectWords.update((v) => ++v);
          showResult();
        }
        currentWord.style.color = "var(--green)";
      } else {
        currentWord.style.color = "var(--red)";
      }
    }
  };

  const showResult = () => {
    console.log(isChallenge);
    endTime = new Date();
    let timeDiff = endTime - startTime;
    // Miliseconds to seconds
    tpSeconds.set(timeDiff / 1000);
    console.log(isChallenge);
    if (isChallenge) goto(`/typ3r/challenge/score?title=${title}`, true);
    else goto(`/typ3r/score`, true);
  };
</script>

<div class="container">
  <div class="form">
    <div class="content">{@html content}</div>
    <label for="typer">{@html placeholder}</label>
    <input type="text" id="typer" />
  </div>
</div>

<style>
  .container {
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    position: relative;
    margin: auto;
    height: 40%;
    width: 100%;
  }
  .content,
  input,
  label {
    position: absolute;
    width: 100%;
    left: 0;
    border: 3px solid var(--surface);
    padding: 12px;
    font-family: "Poppins", sans-serif;
  }
  .content {
    top: 0;
    font-size: 1.2em;
    word-spacing: 0.2em;
    letter-spacing: 0.04em;
    overflow-y: scroll;
    height: calc(100% - 86px);
    color: var(--subtext);
    border-radius: 12px 12px 0 0;
    user-select: none;
  }
  input {
    bottom: 0;
    outline: none;
    font-size: 1.2em;
    color: var(--fg);
    transition: border-color 0.4s ease;
    border-radius: 0 0 12px 12px;
    background: none;
  }
  input:focus,
  input:active {
    border-color: var(--subtext);
  }
  label {
    bottom: 0;
    border-radius: 0 0 12px 12px;
    font-size: 1.2em;
    color: var(--surface);
  }
</style>
