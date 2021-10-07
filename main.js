document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll(".key");
  key.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  let removetransition = function (e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("playing");
  };
  keys.forEach((e) => e.addEventListener("transitionend", removetransition));
});

const key = document.querySelector(`.key0`);
const key1 = document.querySelector(`.key1`);
const key2 = document.querySelector(`.key2`);
const key3 = document.querySelector(`.key3`);
const key4 = document.querySelector(`.key4`);
const key5 = document.querySelector(`.key5`);
const key6 = document.querySelector(`.key6`);
const key7 = document.querySelector(`.key7`);
const key8 = document.querySelector(`.key8`);

const audio = document.querySelector(".akey0");
const audio1 = document.querySelector(".akey1");
const audio2 = document.querySelector(".akey2");
const audio3 = document.querySelector(".akey3");
const audio4 = document.querySelector(".akey4");
const audio5 = document.querySelector(".akey5");
const audio6 = document.querySelector(".akey6");
const audio7 = document.querySelector(".akey7");
const audio8 = document.querySelector(".akey8");

const keys = document.querySelectorAll(".key");

let removetransition = function (e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
};
keys.forEach((e) => e.addEventListener("transitionend", removetransition));

key.addEventListener("click", function () {
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
});
key1.addEventListener("click", function () {
  key1.classList.add("playing");
  audio1.currentTime = 0;
  audio1.play();
});
key2.addEventListener("click", function () {
  key2.classList.add("playing");
  audio2.currentTime = 0;
  audio2.play();
});
key3.addEventListener("click", function () {
  key3.classList.add("playing");
  audio3.currentTime = 0;
  audio3.play();
});
key4.addEventListener("click", function () {
  key4.classList.add("playing");
  audio4.currentTime = 0;
  audio4.play();
});
key5.addEventListener("click", function () {
  key5.classList.add("playing");
  audio5.currentTime = 0;
  audio5.play();
});
key6.addEventListener("click", function () {
  key6.classList.add("playing");
  audio6.currentTime = 0;
  audio6.play();
});
key7.addEventListener("click", function () {
  key7.classList.add("playing");
  audio7.currentTime = 0;
  audio7.play();
});
key8.addEventListener("click", function () {
  key8.classList.add("playing");
  audio8.currentTime = 0;
  audio8.play();
});
