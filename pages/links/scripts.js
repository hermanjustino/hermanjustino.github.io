function share(url) {
    // Replace with your share functionality, e.g., opening a sharing dialog
    alert(`Share ${url}`);
}

document.addEventListener('DOMContentLoaded', function () {
    const linkList = document.querySelector('.link-list');
    
    // Add 'visible' class after a delay
    setTimeout(function() {
      linkList.classList.add('visible');
    }, 500); // Adjust the delay as needed
  });

  document.addEventListener('DOMContentLoaded', function () {
    const background = document.getElementById('background');
    background.style.animation = 'none'; // Disable animation initially
    setTimeout(() => {
      background.style.animation = ''; // Enable animation after a brief delay
    }, 500);
  });
  
  
