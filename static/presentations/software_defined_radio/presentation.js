(() => {
  "use strict";

  const slideCount = 82;
  const presentation = document.getElementById("presentation");
  const slide = document.getElementById("slide");
  const counter = document.getElementById("counter");
  const previous = document.getElementById("previous");
  const next = document.getElementById("next");
  const fullscreen = document.getElementById("fullscreen");
  let currentSlide = 1;
  let touchStartX = null;

  const clamp = (value) => Math.min(slideCount, Math.max(1, value));
  const slideUrl = (number) => `slides/slide_${String(number).padStart(3, "0")}.jpg`;

  function slideFromHash() {
    const requested = Number.parseInt(window.location.hash.slice(1), 10);
    return Number.isFinite(requested) ? clamp(requested) : 1;
  }

  function preload(number) {
    if (number < 1 || number > slideCount) return;
    const image = new Image();
    image.src = slideUrl(number);
  }

  function showSlide(number, updateHash = true) {
    currentSlide = clamp(number);
    slide.src = slideUrl(currentSlide);
    slide.alt = `Slide ${currentSlide} of ${slideCount}`;
    counter.textContent = `${currentSlide} / ${slideCount}`;
    previous.disabled = currentSlide === 1;
    next.disabled = currentSlide === slideCount;

    if (updateHash) {
      history.replaceState(null, "", `#${currentSlide}`);
    }

    preload(currentSlide - 1);
    preload(currentSlide + 1);
  }

  function move(offset) {
    showSlide(currentSlide + offset);
  }

  previous.addEventListener("click", (event) => {
    event.stopPropagation();
    move(-1);
  });

  next.addEventListener("click", (event) => {
    event.stopPropagation();
    move(1);
  });

  presentation.addEventListener("click", (event) => {
    if (event.target.closest("button, a")) return;
    move(event.clientX < window.innerWidth / 2 ? -1 : 1);
  });

  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      move(1);
    } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      showSlide(1);
    } else if (event.key === "End") {
      event.preventDefault();
      showSlide(slideCount);
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      toggleFullscreen();
    }
  });

  presentation.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  presentation.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
  }, { passive: true });

  async function toggleFullscreen() {
    if (!presentation.requestFullscreen) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await presentation.requestFullscreen();
    }
  }

  fullscreen.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleFullscreen();
  });

  if (!presentation.requestFullscreen) {
    fullscreen.hidden = true;
  }

  document.addEventListener("fullscreenchange", () => {
    fullscreen.textContent = document.fullscreenElement ? "Exit full screen" : "Full screen";
  });

  window.addEventListener("hashchange", () => showSlide(slideFromHash(), false));

  showSlide(slideFromHash());
  presentation.focus();
})();
