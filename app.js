/* ============================================================
AutoRoy Cloud – app.js
Theme, mobile nav, smooth scroll, reveal, form demos
============================================================ */

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(isLight) {
if (isLight) {
body.classList.add("light");
themeToggle.innerHTML = "<span>☀️</span>";
localStorage.setItem("autoroy-theme", "light");
} else {
body.classList.remove("light");
themeToggle.innerHTML = "<span>🌙</span>";
localStorage.setItem("autoroy-theme", "dark");
}
}

const savedTheme = localStorage.getItem("autoroy-theme");
if (savedTheme === "light") {
setTheme(true);
} else {
setTheme(false);
}

themeToggle.addEventListener("click", () => {
setTheme(!body.classList.contains("light"));
});

// Mobile nav
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

if (hamburger) {
hamburger.addEventListener("click", () => {
navMobile.classList.toggle("show");
});
}

function closeMobile() {
navMobile.classList.remove("show");
}
window.closeMobile = closeMobile;

// Smooth scroll helper
function scrollToSection(selector) {
const el = document.querySelector(selector);
if (!el) return;
el.scrollIntoView({ behavior: "smooth", block: "start" });
}
window.scrollToSection = scrollToSection;

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

function handleReveal() {
const trigger = window.innerHeight * 0.88;
revealEls.forEach((el) => {
const top = el.getBoundingClientRect().top;
if (top < trigger) {
el.classList.add("show");
}
});
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Lead form demo
function handleLeadSubmit(e) {
e.preventDefault();
const nameInput = document.getElementById("lead-name");
const note = document.getElementById("lead-note");
const name = (nameInput?.value || "").trim() || "תודה";

if (note) {
note.textContent =
name +
" – בפועל, הטופס הזה יכול להיות מחובר ל-Tally / CRM / וואטסאפ. כאן הוא מדגים את חוויית המשתמש.";
note.style.color = "#a5f3fc";
}
}
window.handleLeadSubmit = handleLeadSubmit;

// Reviews demo
function handleReviewSubmit(e) {
e.preventDefault();
const nameInput = document.getElementById("review-name");
const textInput = document.getElementById("review-text");
const note = document.getElementById("review-note");
const list = document.getElementById("reviewsList");

const text = (textInput?.value || "").trim();
if (!text) {
if (note) {
note.textContent = "כדי לשמור ביקורת דמו צריך לפחות משפט אחד 🙂";
note.style.color = "#fecaca";
}
return;
}

const name = (nameInput?.value || "").trim() || "מבקר אנונימי";

if (list) {
const card = document.createElement("article");
card.className = "review-card";
card.innerHTML = `
<div class="review-head">
<span class="review-name">${name}</span>
<span class="review-tag">ביקורת דמו</span>
</div>
<p class="review-text">${text}</p>
`;
list.prepend(card);
}

textInput.value = "";
if (note) {
note.textContent =
"הביקורת נשמרה בדפדפן שלך. אפשר לחבר בהמשך למסד נתונים אמיתי (Sheets, DB וכו').";
note.style.color = "#a5f3fc";
}
}
window.handleReviewSubmit = handleReviewSubmit;
