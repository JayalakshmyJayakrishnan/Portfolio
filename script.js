function reveal() {
  const entry = document.getElementById('entry-card');
  const port = document.getElementById('portfolio');
  entry.classList.add('opacity-0', 'scale-90');

  setTimeout(() => {
    entry.style.display = "none";
    port.classList.remove('hidden');
  }, 500);
}
