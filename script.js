const SITE_CONFIG = {
  demo: true,
  whatsappNumber: "",
  whatsappMessage: "Hola, deseo agendar una valoración médica con el Dr. Andrés Villar."
};

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const toast = document.querySelector("[data-toast]");
let toastTimer;

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNav() {
  nav?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Abrir menú");
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

function showDemoNotice() {
  if (!toast) return;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 5000);
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (!SITE_CONFIG.demo && SITE_CONFIG.whatsappNumber) {
    const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.setAttribute("aria-label", `${link.textContent.trim()} (demostración)`);
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showDemoNotice();
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
