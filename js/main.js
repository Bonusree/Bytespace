// ByteSpace landing page interactions

// ---------- Mobile menu ----------
const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");

function setMenu(open) {
  header.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.addEventListener("click", () => {
  setMenu(!header.classList.contains("is-open"));
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// ---------- Category chips (select one) ----------
const chips = document.querySelectorAll(".chip:not(.chip--more)");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => {
      const active = c === chip;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-pressed", String(active));
    });
  });
});

// ---------- Newsletter (front-end only) ----------
const newsletterForm = document.getElementById("newsletter-form");
const newsletterMsg = document.getElementById("newsletter-msg");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterMsg.textContent = "Thanks for subscribing!";
  newsletterForm.reset();
});
