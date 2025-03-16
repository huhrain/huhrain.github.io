const log = console.log,
  array = [
    { src: "icons/icon1.png", link: "https://x.com/is_bluecheese" },
    { src: "icons/icon2.png", link: "https://x.com/is_bluecheese" },
    { src: "icons/icon3.png", link: "https://x.com/is_bluecheese" }
  ],
  target = document.getElementById("target"),
  lastSrc = sessionStorage.lastSrc || target.getAttribute("src");

let random, newSrc = lastSrc;
while (newSrc === lastSrc) {
  random = Math.floor(Math.random() * array.length);
  newSrc = array[random].src;
}

target.src = sessionStorage.lastSrc = newSrc;

target.addEventListener("click", () => {
  const selectedImage = array.find(image => image.src === newSrc);
  if (selectedImage) {
    window.open(selectedImage.link, "_blank");
  }
});

log(target);