export const detectResourceListOverflow = () => {
  const el = document.getElementById('resources_list');
  if (el) {
    const nextBtn = document.getElementById('btn_next');
    nextBtn.style.display = el.scrollWidth > el.clientWidth ? 'flex' : 'none';
  }
}

// https://gist.github.com/treyhuffine/2ced8b8c503e5246e2fd258ddbd21b8c#file-debounce-js
export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};