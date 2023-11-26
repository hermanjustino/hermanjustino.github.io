// Define artist data (customize as needed)
 const artists = [
    {
        id: '1',
        name: 'Dorian Schwartz',
        description: 'One sentence description about Artist 1.',
        largeImage: '../assets/artist1_large.jpg',
        headline: 'Dorian Schwartz',
        detailDescription: 'artist + psychotherapist ',
        photo: './assets/artist1.jpg'
        // Add customizable content (images, videos, text) here for Artist 1
    },
    {
        id: '2',
        name: 'Jair Castillo',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/artist2_large.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Two sentence description about Artist 2 and their work.',
        photo: './assets/artist2.jpg'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '3',
        name: 'Jair Castillo',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/artist2_large.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Two sentence description about Artist 2 and their work.',
        photo: './assets/artist3.jpg'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '4',
        name: 'Jair Castillo',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/artist2_large.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Two sentence description about Artist 2 and their work.',
        photo: './assets/artist4.jpg'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '5',
        name: 'Jair Castillo',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/artist2_large.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Two sentence description about Artist 2 and their work.',
        photo: './assets/artist5.jpg'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    // Add more artist data as needed
];

window.onload = function () {
    // Retrieve artist ID from the URL query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const artistId = urlParams.get('artist');

    // Find the artist by ID
    const artist = artists.find(a => a.id === artistId);

    if (artist) {
        // Update the content on the artist detail page
        const artistNameElement = document.querySelector('.artist_name');
        const artistImageElement = document.querySelector('.artist-detail img');
        const artistHeadlineElement = document.querySelector('.artist-detail h2');
        const artistDescriptionElement = document.querySelector('.artist-detail p');
        const pageTitleElement = document.querySelector('.page_title');

        artistNameElement.textContent = artist.name;
        artistImageElement.src = artist.largeImage;
        artistHeadlineElement.textContent = artist.headline;
        artistDescriptionElement.textContent = artist.detailDescription;
        pageTitleElement.textContent = artist.name + ' - Outlet';

        //Load artists name in slideshow
    }
};

// Function to populate the slideshow
function populateSlideshow() {
    const slideshowContainer = document.getElementById("gallery");
  
    artists.forEach(artist => {
      const slide = document.createElement("div");
      slide.className = "gallery-item";
  
      const image = document.createElement("img");
      image.src = artist.photo;
      slide.appendChild(image);

      const caption = document.createElement("div");
      caption.className = "caption";
      slide.appendChild(caption);
  
      const name = document.createElement("p");
      caption.className = "gallery_line_1";
      name.textContent = artist.name;
      slide.appendChild(name);

      const link = document.createElement('div');
      link.className = 'learn_more_link';
      link.innerHTML = `<a href="./pages/artist.html?artist=${artist.id}">See More</a>`;
      caption.appendChild(link);
  
      const description = document.createElement("p");
      description.id = 'gallery_line_3';
      description.textContent = artist.description;
      caption.appendChild(description);
  
      slideshowContainer.appendChild(slide);
    });
  }
  
  // Call the function to populate the slideshow
  populateSlideshow();
