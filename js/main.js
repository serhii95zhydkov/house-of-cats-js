const slider = document.querySelector(".hero-list");
const prev = document.querySelector(".next");
const next = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 1000,
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

AOS.init();
