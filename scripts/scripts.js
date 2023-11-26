/*---- Navbar Dropdown function ---- */
function navbarDropdown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const text = `Outlet Network is both a platform and a community 
that brings together Toronto creatives in an attempt to bridge 
the gap between artists and Toronto’s creative community.`;

const typewriterText = document.getElementById("typewriter-text");
let charIndex = 0;

function typeWriter() {
    if (charIndex < text.length) {
        typewriterText.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Adjust the typing speed here (milliseconds)
    }
}

function openArtistSeries(artist) {
  window.location.href = `${artist}.html`;
}

/* --------- GALLERY ARTIST SERIES ---------- */

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const gallery = document.getElementById("gallery");

prevBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: "smooth",
    });
});

nextBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: "smooth",
    });
});
