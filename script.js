// Periodic flicker on each entry heading
const headings = document.querySelectorAll('.entry h2');
function flickerHeadings() {
  headings.forEach(h => {
    h.style.opacity = Math.random() < 0.8 ? '1' : '0.7';
  });
}
setInterval(flickerHeadings, 3000);

// Optional: blackout/reload logic if desired
