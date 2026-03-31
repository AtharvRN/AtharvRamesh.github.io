document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sectionNodes = document.querySelectorAll(".content-section[id]");

  function getTheme() {
    const saved = localStorage.getItem("home_theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return prefersDark.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-theme", isDark);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
      themeToggle.innerHTML = isDark ? "<i class=\"fas fa-sun\"></i>" : "<i class=\"fas fa-moon\"></i>";
    }
  }

  function setActiveNav() {
    const scrollY = window.pageYOffset + 130;
    let currentId = "";

    sectionNodes.forEach(function (section) {
      if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        currentId = "#" + section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === currentId);
    });
  }

  applyTheme(getTheme());
  setActiveNav();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDark = document.body.classList.contains("dark-theme");
      const nextTheme = isDark ? "light" : "dark";
      localStorage.setItem("home_theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  prefersDark.addEventListener("change", function (event) {
    if (!localStorage.getItem("home_theme")) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  window.addEventListener("scroll", setActiveNav);
  window.addEventListener("resize", setActiveNav);
});

