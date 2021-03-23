
export function debounce(func, wait) {
  let timer;
  return (...args) => {
    if(!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
