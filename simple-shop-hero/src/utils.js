export const detectResourceListOverflow = () => {
  const el = document.getElementById('resources_list');
  if (el) {
    const nextBtn = document.getElementById('btn_next');
    nextBtn.style.display = el.scrollWidth > el.clientWidth ? 'flex' : 'none';
  }
}

// https://gist.github.com/nmsdvid/8807205#file-new_gist_file-js-L21
export const debounce = (callback, delay = 250) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = null
      callback(...args)
    }, delay)
  }
}