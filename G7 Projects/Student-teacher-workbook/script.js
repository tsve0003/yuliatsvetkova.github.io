// Placeholder for future interactivity.
document.querySelectorAll("details").forEach(d => {
  d.addEventListener("toggle", () => {
    if (d.open) {
      document.querySelectorAll("details").forEach(o => { if (o !== d) o.open = false; });
    }
  });
});
