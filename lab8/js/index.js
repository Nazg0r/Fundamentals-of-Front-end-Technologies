document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.onscroll = function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = "-140px";
    } else {
      header.style.top = "0";
    }
    lastScrollTop = scrollTop;
  };
});
