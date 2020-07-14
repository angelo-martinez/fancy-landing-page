let darkTheme = false;
const switchWrapper = document.querySelector('.js-switch-wrapper');
const switcher = document.querySelector('.js-switch');

switchWrapper.addEventListener('click', () => {
  if (darkTheme === false) {
    document
      .querySelector(':root')
      .style.setProperty('--theme-color-light', '#090629');
    document
      .querySelector(':root')
      .style.setProperty('--theme-color-dark', '#08061f');
    switcher.classList.add('on');
  } else {
    document
      .querySelector(':root')
      .style.setProperty('--theme-color-light', 'rgba(255, 236, 210, 1)');
    document
      .querySelector(':root')
      .style.setProperty('--theme-color-dark', 'rgba(252, 182, 159, 0.51)');
    switcher.classList.remove('on');
  }
  darkTheme = !darkTheme;
});
