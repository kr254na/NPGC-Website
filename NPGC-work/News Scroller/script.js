document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("newsBtn");
  const panel = document.getElementById("newsPanel");

  // Panel open on load (already has class "open")

  btn.addEventListener("click", () => {
    const isOpen = panel.classList.contains("open");

    if (isOpen) {
      panel.classList.remove("open");
      panel.classList.add("closed");
    } else {
      panel.classList.add("open");
      panel.classList.remove("closed");
    }
  });

});
