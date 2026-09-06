// Mobile nav toggle + dark/light theme toggle (persisted in localStorage)
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "theme";

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentTheme() {
    return root.getAttribute("data-theme");
  }

  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) applyTheme(saved);
  } catch (e) {
    /* localStorage unavailable — ignore, falls back to system theme */
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var isDark =
          currentTheme() === "dark" ||
          (!currentTheme() &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
        var next = isDark ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {
          /* ignore */
        }
      });
    }

    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
    }
  });
})();
