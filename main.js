document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  key.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const keys = document.querySelectorAll(".key");
  let removetransition = function (e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("playing");
  };
  keys.forEach((e) => e.addEventListener("transitionend", removetransition));
});
