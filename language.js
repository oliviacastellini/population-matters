
document.addEventListener("DOMContentLoaded", function () {
  const isSpanish = window.location.pathname
    .split("/")
    .includes("es");

  const pages = [
    { en: "Home", es: "Inicio", file: "index.html" },
    { en: "Stories", es: "Historias", file: "stories.html" },
    { en: "Projects", es: "Proyectos", file: "projects.html" },
    { en: "About", es: "Sobre mí", file: "about.html" }
  ];

  const path = window.location.pathname;
  const root = isSpanish
    ? path.substring(0, path.lastIndexOf("/es/") + 1)
    : path.substring(0, path.lastIndexOf("/") + 1);

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    const label = link.textContent.trim();
    const page = pages.find(p => p.en === label || p.es === label);

    if (page) {
      link.textContent = isSpanish ? page.es : page.en;
      link.href = root + (isSpanish ? "es/" : "") + page.file;
    }

    if (label === "EN" || label === "ES") {
      const currentFile = path.split("/").pop() || "index.html";
      const file = pages.some(p => p.file === currentFile)
        ? currentFile
        : "index.html";

      link.href = root + (label === "ES" ? "es/" : "") + file;
    }
  });
});
