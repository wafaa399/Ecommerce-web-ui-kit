// common.js — shared by index.html and listing.html (load after products.js)
(() => {
  "use strict";

  const setHref = (sel, href) =>
    document.querySelectorAll(sel).forEach((a) => a.setAttribute("href", href));

  // ---------- Navigation wiring ----------
  setHref(".notification-bar a", "listing.html"); // "Order Now"
  setHref(".navbar-brand, .footer-logo", "index.html"); // logos
  setHref(".fashion-banner a", "listing.html"); // "Start Browsing"
  setHref(".hero-section a.btn-dark-rounded", "listing.html"); // "View Collection"

  const CATEGORY_LINKS = {
    men: "listing.html?gender=men",
    women: "listing.html?gender=women",
    accessories: "listing.html?category=accessories",
  };
  document.querySelectorAll(".navbar .dropdown-menu a").forEach((a) => {
    const target = CATEGORY_LINKS[a.textContent.trim().toLowerCase()];
    if (target) a.setAttribute("href", target);
  });

  const FOOTER_LINKS = { "about us": "about.html", contact: "contact.html" };
  document.querySelectorAll(".footer-links a").forEach((a) => {
    const target = FOOTER_LINKS[a.textContent.trim().toLowerCase()];
    if (target) a.setAttribute("href", target);
  });

  // ---------- Header search ----------
  // On the listing page the live search handles it; elsewhere go to listing.html?q=...
  document.querySelectorAll("form.search-box").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (document.getElementById("productsGrid")) return;
      const q = form.querySelector("input")?.value.trim() || "";
      location.href = q ? `listing.html?q=${encodeURIComponent(q)}` : "listing.html";
    });
  });
})();