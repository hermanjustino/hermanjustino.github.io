function toggleMobileMenu() {
    const mobileDropdown = document.getElementById("mobileDropdown");
    mobileDropdown.style.display = mobileDropdown.style.display === "block" ? "none" : "block";
  }
  const text = `This is a typewriter-style effect.
  It gradually fills the paragraph with multiple lines of text.
  The textbox expands as the paragraph grows.
  It works on both desktop and mobile.`;
  
  const typewriterText = document.getElementById("typewriter-text");
  let charIndex = 0;
  
  function typeWriter() {
      if (charIndex < text.length) {
          typewriterText.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 50); // Adjust the typing speed here (milliseconds)
      }
  }
  
  // Start the typewriter effect when the page loads
  window.onload = function() {
      typeWriter();
  };
  