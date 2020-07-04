export const detectResourceListOverflow = () => {
  const el = document.getElementById('resources_list');
  if (el) {
    const nextBtn = document.getElementById('btn_next');
    nextBtn.style.display = el.scrollWidth > el.clientWidth ? 'flex' : 'none';
  }
}
