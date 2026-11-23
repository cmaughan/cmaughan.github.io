/* Apply a saved light/dark choice before the page paints.  Kept as a file
   rather than an inline script so it runs under the site's CSP. */
(function () {
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {}
})();
