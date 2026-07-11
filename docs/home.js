document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sectionNodes = document.querySelectorAll(".content-section[id]");
  const topNav = document.querySelector(".top-nav");
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const primaryNavigation = document.getElementById("primary-navigation");
  const mobileQuery = window.matchMedia("(max-width: 640px)");

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

  function setMenuOpen(isOpen) {
    if (!topNav || !mobileNavToggle) {
      return;
    }

    topNav.classList.toggle("menu-open", isOpen);
    mobileNavToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileNavToggle.innerHTML = isOpen
      ? "<i class=\"fas fa-times\" aria-hidden=\"true\"></i><span>Close</span>"
      : "<i class=\"fas fa-bars\" aria-hidden=\"true\"></i><span>Menu</span>";
  }

  applyTheme(getTheme());
  setActiveNav();
  setMenuOpen(false);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDark = document.body.classList.contains("dark-theme");
      const nextTheme = isDark ? "light" : "dark";
      localStorage.setItem("home_theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function () {
      const isOpen = topNav && topNav.classList.contains("menu-open");
      setMenuOpen(!isOpen);
    });
  }

  if (primaryNavigation) {
    primaryNavigation.addEventListener("click", function (event) {
      if (event.target.closest(".nav-link") && mobileQuery.matches) {
        setMenuOpen(false);
      }
    });
  }

  document.addEventListener("click", function (event) {
    if (mobileQuery.matches && topNav && !topNav.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
      if (mobileNavToggle) {
        mobileNavToggle.focus();
      }
    }
  });

  prefersDark.addEventListener("change", function (event) {
    if (!localStorage.getItem("home_theme")) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  window.addEventListener("scroll", setActiveNav);
  window.addEventListener("resize", function () {
    setActiveNav();
    if (!mobileQuery.matches) {
      setMenuOpen(false);
    }
  });
});

