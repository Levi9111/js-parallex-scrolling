const stars = document.querySelector("#stars");
const moon = document.querySelector("#moon");
const btn = document.querySelector("#btn");
const text = document.querySelector(".section--header");
const mountainBehind = document.querySelector("#mountain_behind");
const mountainFront = document.querySelector("#mountain_front");

window.addEventListener("scroll", function () {
  const value = window.scrollY + 1;
  console.log(value);
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountainBehind.style.top = value * 0.5 + "px";
  mountainFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});
