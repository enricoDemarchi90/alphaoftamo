// // ********** set date ************
// // select span
// const date = (document.getElementById("date").innerHTML =
//   new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

// ********** cirurgia catarata off-canvas ************

const catarataBtn = document.getElementById("catarata-btn");
const cataratabar = document.getElementById("cataratabar");
const catarataClose = document.getElementById("catarata-close");

catarataBtn.addEventListener("click", () => {
  cataratabar.classList.add("showCatarata");
});

catarataClose.addEventListener("click", () => {
  cataratabar.classList.remove("showCatarata");
});
// ********** cirurgia refrativa off-canvas ************

const refrativaBtn = document.getElementById("refrativa-btn");
const refrativabar = document.getElementById("refrativabar");
const refrativaClose = document.getElementById("refrativa-close");

refrativaBtn.addEventListener("click", () => {
  refrativabar.classList.add("showRefrativa");
});

refrativaClose.addEventListener("click", () => {
  refrativabar.classList.remove("showRefrativa");
});
// ********** demais cirurgias off-canvas ************

const cirurgiasBtn = document.getElementById("cirurgias-btn");
const cirurgiasbar = document.getElementById("cirurgiasbar");
const cirurgiasClose = document.getElementById("cirurgias-close");

cirurgiasBtn.addEventListener("click", () => {
  cirurgiasbar.classList.add("showCirurgias");
});

cirurgiasClose.addEventListener("click", () => {
  cirurgiasbar.classList.remove("showCirurgias");
});

// ********** video modal ************

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("videobtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
