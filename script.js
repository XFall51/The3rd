/* =====================================================================
   MONTHSARY SURPRISE — SCRIPT.JS
   -----------------------------------------------------------------
   Everything you need to personalize is in the "CUSTOMIZE ME" block
   right below. Scroll past it for the actual site logic — you
   shouldn't need to touch anything after that section.
   ===================================================================== */


/* #####################################################################
   #                                                                   #
   #                    ✏️  CUSTOMIZE ME  ✏️                          #
   #                                                                   #
   ##################################################################### */

const relationshipData = {
  girlfriendName: "Adieee",
  yourName: "YOUR LOVER",
  monthsTogether: 3,
  anniversaryDate: "SEPTEMBER 02, 2026", // e.g. "September 1, 2026"
};

// Shown as the very first line on the opening screen.
const openingGreeting = `Hey, ${relationshipData.girlfriendName === "Adiee" ? "Lover" : relationshipData.girlfriendName}...`;

// SECTION 1 — the first typewriter message. Keep it short; it's the opener.
const openingMessage =
`I know it's only been three months,
but somehow you've already become
such an important part of my life.`;

// SECTION 2 — the timeline. Add/remove entries freely; the layout adapts.
const timeline = [
  {
    month: "Month 1",
    title: "The Beginning",
    text: "OUR FIRST MONTH STORY  — how it started, the first time you knew this was different, how it felt more real than those who took years, i fell inlove with you in a way i never expected.",
  },
  {
    month: "Month 2",
    title: "Getting Closer",
    text: "OUR SECOND MONTH STORY HERE — the inside jokes that started, the late-night calls, the little things you learned about each other.",
  },
  {
    month: "Month 3",
    title: "Still Choosing You",
    text: "OUR THIRD MONTH STORY  — how things feel now, what's grown, why you keep choosing this every single day.",
  },
];

// SECTION 3 — the photo gallery. Put your images in assets/photos/ and
// reference them here by filename. If a file is missing, a soft
// placeholder heart is shown instead so the layout never breaks.
const photos = [
  { src: "Pictures/p1.jpg", caption: "How Ai Made it Possible to have pictures muna kahit di pa tayu nag kikita." },
  { src: "Pictures/p2.jpg", caption: "This one still makes me smile." },
  { src: "Pictures/p3.jpg", caption: "You, Being Youu soo Pretty." },
  { src: "Pictures/p4.jpg", caption: "I remember exactly how this day felt." },
  { src: "Pictures/p5.jpg", caption: "A quiet moment I didn't want to forget." },
  { src: "Pictures/p6.jpg", caption: "One of my favorites." },
];

// SECTION 4 — things you love about her. Aim for 8–10; each flips to
// reveal the message on the back.
const loveReasons = [
  { icon: "💗", label: "Your smile", message: "It's honestly the first thing I look for in every photo of you." },
  { icon: "🌙", label: "The way you talk to me", message: "Even about the smallest things, I could listen for hours." },
  { icon: "😂", label: "How you make me laugh", message: "You have this way of turning an ordinary moment into one I remember." },
  { icon: "🫶", label: "The way you care", message: "You notice things about me that I don't even say out loud." },
  { icon: "✨", label: "Your personality", message: "You're exactly the kind of person I didn't know I was looking for." },
  { icon: "🍃", label: "Your patience", message: "With me, with my mood, with everything — thank you for that." },
  { icon: "📖", label: "How you listen", message: "You make me feel heard in a way I'm still not used to." },
  { icon: "🕯️", label: "Your quiet moments", message: "I love the version of you nobody else gets to see." },
  { icon: "❤️", label: "Simply being you", message: "Out of everyone, I'm glad it's you." },
];

// SECTION 5 — your song. Drop the audio file at assets/music/oursong.mp3
const songTitle = "Our Song";
const songArtist = "— add the artist name —";

// SECTION 6 — messages that reveal one at a time.
const wonderMessages = [
  "You are someone I look forward to talking to.",
  "You make ordinary days feel special.",
  "You make me want to become a better version of myself.",
  "And I'm genuinely happy that I get to call you mine.",
];

// SECTION 7 — your full monthsary letter. Line breaks are preserved.
const loveLetter =
`My Adiee,

[MY Love Letter]

Hi Adiee ko, it has been three months now na, how time flies to fast,
and im still surprise even now, na I Fell soo deeply inloveee with you,
I Cherished everything we have and will continue to have with you, even though
marami tayung pag dadaanan sa buhay, but i hope you will stay by my side, Iloveee you always
My one and Only Adiee ko ❤️.
.

— ${relationshipData.yourName}`;

// SECTION 8 — shown after she clicks "Of course!"
const questionAnswerText = "I knew it. ❤️";

// SECRET SURPRISE — revealed by the tiny heart on the final section.
const secretMessage = "I love you more than this little website could ever explain. ❤️";


/* #####################################################################
   #                                                                   #
   #             SITE LOGIC — you shouldn't need to edit below         #
   #                                                                   #
   ##################################################################### */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("openingGreeting").textContent = openingGreeting;

  initStarsCanvas();
  initOpeningTransition();
  initTypewriter();
  renderTimeline();
  renderGallery();
  initLightbox();
  renderLoveCards();
  initMusicPlayer();
  renderWonderMessages();
  initEnvelope();
  initQuestionSection();
  initFinalSection();
  initSecretEasterEgg();
  initScrollReveal();
  initProgressBar();
  initFloatingHearts();
  initCursorTrail();
});

/* ---------------------------------------------------------------- */
/* Opening screen: animated stars                                    */
/* ---------------------------------------------------------------- */

function initStarsCanvas() {
  const canvas = document.getElementById("starsCanvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let width, height;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    const count = Math.min(120, Math.floor((width * height) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.3,
      speed: Math.random() * 0.4 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
    }));
  }

  let running = true;
  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);
    for (const s of stars) {
      s.twinkle += 0.02;
      const alpha = 0.4 + Math.sin(s.twinkle) * 0.35;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246, 236, 236, ${Math.max(0, alpha)})`;
      ctx.fill();
      s.y -= s.speed;
      if (s.y < -5) { s.y = height + 5; s.x = Math.random() * width; }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();

  // Pause the canvas once the opening screen is gone, to save cycles.
  const openingScreen = document.getElementById("openingScreen");
  const observer = new MutationObserver(() => {
    if (openingScreen.hidden) { running = false; observer.disconnect(); }
  });
  observer.observe(openingScreen, { attributes: true });
}

/* ---------------------------------------------------------------- */
/* Opening -> main site transition                                    */
/* ---------------------------------------------------------------- */

function initOpeningTransition() {
  const btn = document.getElementById("openSurpriseBtn");
  const openingScreen = document.getElementById("openingScreen");
  const mainSite = document.getElementById("mainSite");
  const audio = document.getElementById("audioElement");

  btn.addEventListener("click", () => {
    spawnBurstHearts(btn, 10);
    openingScreen.classList.add("is-leaving");

    setTimeout(() => {
      openingScreen.hidden = true;
      mainSite.hidden = false;
      // Best-effort: try to start the music softly in the background.
      // Browsers that block autoplay will simply no-op here; she can
      // always press play manually in the "Our Song" section.
      audio.volume = 0.5;
      audio.play().catch(() => { /* autoplay blocked — that's fine */ });
    }, 900);
  }, { once: true });
}

/* ---------------------------------------------------------------- */
/* Section 1 — typewriter effect                                     */
/* ---------------------------------------------------------------- */

function initTypewriter() {
  const target = document.getElementById("typewriterTarget");
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        typeText(target, openingMessage);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(target);
}

function typeText(el, text) {
  el.textContent = "";
  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  cursor.textContent = "\u00A0";

  let i = 0;
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(step, 32);
    } else {
      cursor.remove();
    }
  }
  step();
}

/* ---------------------------------------------------------------- */
/* Section 2 — timeline                                               */
/* ---------------------------------------------------------------- */

function renderTimeline() {
  const list = document.getElementById("timelineList");
  list.innerHTML = timeline.map((item) => `
    <div class="timeline-item reveal-on-scroll">
      <p class="timeline-month">${escapeHtml(item.month)}</p>
      <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
      <p class="timeline-text">${escapeHtml(item.text)}</p>
    </div>
  `).join("");
}

/* ---------------------------------------------------------------- */
/* Section 3 — gallery + lightbox                                     */
/* ---------------------------------------------------------------- */

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = photos.map((photo, i) => `
    <button class="gallery-photo reveal-on-scroll" data-index="${i}" aria-label="${escapeHtml(photo.caption)}">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.caption)}"
           onerror="this.parentElement.innerHTML = '<div class=\\'gallery-placeholder\\'>🤍</div>'">
      <span class="gallery-caption-hint">${escapeHtml(photo.caption)}</span>
    </button>
  `).join("");
}

function initLightbox() {
  const grid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".gallery-photo");
    if (!card) return;
    const index = Number(card.dataset.index);
    const photo = photos[index];
    img.src = photo.src;
    img.alt = photo.caption;
    caption.textContent = photo.caption;
    lightbox.hidden = false;
  });

  function close() { lightbox.hidden = true; }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------------------------------------------------------------- */
/* Section 4 — love cards                                             */
/* ---------------------------------------------------------------- */

function renderLoveCards() {
  const grid = document.getElementById("loveGrid");
  grid.innerHTML = loveReasons.map((reason, i) => `
    <button class="love-card reveal-on-scroll" data-index="${i}" aria-label="${escapeHtml(reason.label)}">
      <div class="love-card-inner">
        <div class="love-card-face love-card-front">
          <span class="love-icon">${reason.icon}</span>
          <span class="love-label">${escapeHtml(reason.label)}</span>
        </div>
        <div class="love-card-face love-card-back">
          <p>${escapeHtml(reason.message)}</p>
        </div>
      </div>
    </button>
  `).join("");

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".love-card");
    if (!card) return;
    card.classList.toggle("is-flipped");
  });
}

/* ---------------------------------------------------------------- */
/* Section 5 — music player                                           */
/* ---------------------------------------------------------------- */

function initMusicPlayer() {
  document.getElementById("musicTitle").textContent = songTitle;
  document.getElementById("musicArtist").textContent = songArtist;

  const audio = document.getElementById("audioElement");
  const player = document.getElementById("musicPlayer");
  const playBtn = document.getElementById("musicPlayBtn");
  const playIcon = document.getElementById("musicPlayIcon");
  const seek = document.getElementById("musicSeek");
  const currentTimeEl = document.getElementById("musicCurrentTime");
  const durationEl = document.getElementById("musicDuration");

  function formatTime(sec) {
    if (!isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  audio.addEventListener("loadedmetadata", () => {
    seek.max = audio.duration || 0;
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    seek.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener("play", () => {
    playIcon.textContent = "❚❚";
    player.classList.add("is-playing");
  });

  audio.addEventListener("pause", () => {
    playIcon.textContent = "▶";
    player.classList.remove("is-playing");
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });

  seek.addEventListener("input", () => {
    audio.currentTime = Number(seek.value);
  });
}

/* ---------------------------------------------------------------- */
/* Section 6 — wonder messages, reveal one at a time                  */
/* ---------------------------------------------------------------- */

function renderWonderMessages() {
  const list = document.getElementById("wonderList");
  list.innerHTML = wonderMessages.map((msg) =>
    `<p class="wonder-msg">${escapeHtml(msg)}</p>`
  ).join("");

  const items = list.querySelectorAll(".wonder-msg");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(items).indexOf(entry.target);
        setTimeout(() => entry.target.classList.add("is-visible"), index * 350);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  items.forEach((item) => observer.observe(item));
}

/* ---------------------------------------------------------------- */
/* Section 7 — envelope + letter                                      */
/* ---------------------------------------------------------------- */

function initEnvelope() {
  document.getElementById("letterText").textContent = loveLetter;

  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openLetterBtn");

  openBtn.addEventListener("click", () => {
    envelope.classList.add("is-open");
    openBtn.textContent = "Read below ↓";
    openBtn.disabled = true;
  }, { once: true });
}

/* ---------------------------------------------------------------- */
/* Section 8 — the question                                           */
/* ---------------------------------------------------------------- */

function initQuestionSection() {
  const yesBtn = document.getElementById("yesBtn");
  const maybeBtn = document.getElementById("maybeBtn");
  const answer = document.getElementById("questionAnswer");
  const confettiLayer = document.getElementById("confettiLayer");

  const maybeTexts = ["Maybe... 🥺", "Are you sure? 👀", "Nope, try again 😭"];
  let maybeIndex = 0;

  maybeBtn.addEventListener("click", () => {
    maybeIndex = Math.min(maybeIndex + 1, maybeTexts.length - 1);
    maybeBtn.textContent = maybeTexts[maybeIndex];

    const wrap = maybeBtn.parentElement;
    const maxX = wrap.clientWidth * 0.28;
    const maxY = 24;
    const dx = (Math.random() * 2 - 1) * maxX;
    const dy = (Math.random() * 2 - 1) * maxY;
    maybeBtn.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  yesBtn.addEventListener("click", () => {
    answer.hidden = false;
    answer.textContent = questionAnswerText;
    yesBtn.disabled = true;
    maybeBtn.disabled = true;
    launchConfetti(confettiLayer);
    spawnBurstHearts(yesBtn, 16);
  }, { once: true });
}

function launchConfetti(layer) {
  const colors = ["#f0a8c0", "#ff9ec7", "#d8a86a", "#f6ecec"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    const duration = 2200 + Math.random() * 1600;
    piece.style.animationDuration = `${duration}ms`;
    piece.style.animationDelay = `${Math.random() * 300}ms`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), duration + 400);
  }
}

/* ---------------------------------------------------------------- */
/* Heart-burst helper (used by opening button + "Of course!")          */
/* ---------------------------------------------------------------- */

function spawnBurstHearts(originEl, count) {
  const rect = originEl.getBoundingClientRect();
  const layer = document.getElementById("floatingHeartsLayer") || document.body;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = "❤";
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top + rect.height / 2}px`;
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 90;
    heart.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    heart.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    heart.style.animationDuration = `${700 + Math.random() * 400}ms`;
    heart.style.position = "fixed";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

/* ---------------------------------------------------------------- */
/* Final section                                                      */
/* ---------------------------------------------------------------- */

function initFinalSection() {
  // Content is already in the HTML; nothing dynamic needed here beyond
  // what reveal-on-scroll already provides.
}

/* ---------------------------------------------------------------- */
/* Secret Easter egg heart                                            */
/* ---------------------------------------------------------------- */

function initSecretEasterEgg() {
  document.getElementById("secretModalText").textContent = secretMessage;

  const heart = document.getElementById("secretHeart");
  const modal = document.getElementById("secretModal");
  const closeBtn = document.getElementById("secretModalClose");

  heart.addEventListener("click", () => { modal.hidden = false; });
  closeBtn.addEventListener("click", () => { modal.hidden = true; });
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.hidden = true; });
}

/* ---------------------------------------------------------------- */
/* Scroll-reveal for cards/sections                                   */
/* ---------------------------------------------------------------- */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Elements rendered dynamically (timeline, gallery, love cards) are
  // observed here, after render. Re-run whenever new ones might exist.
  document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

  // "Keep Going" buttons scroll to their target section.
  document.querySelectorAll(".scroll-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ---------------------------------------------------------------- */
/* Progress bar                                                       */
/* ---------------------------------------------------------------- */

function initProgressBar() {
  const fill = document.getElementById("progressFill");
  const mainSite = document.getElementById("mainSite");

  function update() {
    if (mainSite.hidden) { fill.style.width = "0%"; return; }
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    fill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------------------------------------------------------------- */
/* Ambient floating hearts (subtle, low frequency)                    */
/* ---------------------------------------------------------------- */

function initFloatingHearts() {
  const layer = document.getElementById("floatingHeartsLayer");
  const symbols = ["♡", "❤", "♥"];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  function spawn() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 14}px`;
    heart.style.setProperty("--drift", `${(Math.random() * 2 - 1) * 60}px`);
    const duration = 9000 + Math.random() * 6000;
    heart.style.animationDuration = `${duration}ms`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), duration);
  }

  setInterval(spawn, 2600);
  spawn();
}

/* ---------------------------------------------------------------- */
/* Cursor heart trail (desktop only, gentle + throttled)               */
/* ---------------------------------------------------------------- */

function initCursorTrail() {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isTouchDevice || prefersReducedMotion) return;

  const layer = document.getElementById("cursorTrailLayer");
  let lastSpawn = 0;

  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSpawn < 120) return; // throttle so it stays subtle
    lastSpawn = now;

    const heart = document.createElement("span");
    heart.className = "trail-heart";
    heart.textContent = "♡";
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 900);
  });
}

/* ---------------------------------------------------------------- */
/* Utility                                                             */
/* ---------------------------------------------------------------- */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
