export const setPageLoadListener = () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    setTimeout(() => {
      document.body.classList.add(`page-loaded`);
    }, 0);
  });
};
