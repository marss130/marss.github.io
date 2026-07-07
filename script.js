/* =========================================================
   Portfolio — Marwan Bingert
   JS léger, sans dépendance. Respecte prefers-reduced-motion.
   ========================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Année dynamique dans le footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    // Referme au clic sur un lien
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Referme avec Échap
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Ombre/bordure du header au scroll ---------- */
  const header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal au scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Scrollspy : lien de nav actif ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  function setActive(id) {
    navLinks.forEach(function (link) {
      const match = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", match);
      if (match) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (section) { spyObserver.observe(section); });
  }
})();
