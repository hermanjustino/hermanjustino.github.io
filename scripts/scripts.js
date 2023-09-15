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
        setTimeout(typeWriter, 40); // Adjust the typing speed here (milliseconds)
    }
}

// Start the typewriter effect when the page loads
window.onload = function() {
    typeWriter();
};