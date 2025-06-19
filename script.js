function reveal() {
  const card = document.getElementById('entry-card');
  const port = document.getElementById('portfolio');
  card.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    card.remove();
    document.body.classList.remove('flex','items-center','justify-center');
    port.classList.remove('hidden');
  }, 500);
}
