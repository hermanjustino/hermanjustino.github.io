// Define artist data (customize as needed)
 const artists = [
    {
        id: '1',
        name: 'Dorian Schwartz',
        description: 'artist + psychotherapist',
        largeImage: '../assets/artist1_large.jpg',
        headline: 'Dorian Schwartz',
        detailDescription: 'artist + psychotherapist',
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
        largeImage: '../assets/artist3.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Two sentence description about Artist 2 and their work.',
        photo: './assets/artist3.jpg'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '4',
        name: 'Jair Castillo',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/artist3.jpg',
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

function populateArtistPage() {
    // Retrieve artist ID from the URL query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const artistId = urlParams.get('artist');

    // Find the artist by ID
    const artist = artists.find(a => a.id === artistId);

    // Update the content on the artist detail page//Get the container for the artist page
    const artistPageContainer = document.querySelector(".artist-detail");

    if (artist) {

        const image = document.createElement("img");
        image.id = "artist_main_image";
        image.alt = `"${artist.name} Large Image"`;
        image.src = artist.photo;
        artistPageContainer.appendChild(image);

        const artistText = document.createElement("div");
        artistText.className = "artist_detail_headlines";
        artistPageContainer.appendChild(artistText);

        const artistHeadline = document.createElement("h2");
        artistHeadline.id = "artist_headline";
        artistHeadline.textContent = artist.headline;
        artistText.appendChild(artistHeadline);

        const artistDescription = document.createElement("p");
        artistDescription.id = "artistText"
        artistDescription.textContent = artist.detailDescription;
        artistText.appendChild(artistDescription);

        document.title = `Outlet Network - ${artist.name}`;

    }
}

// Function to populate the slideshow
function populateSlideshow() {
    console.log("Loading Populate slideshow function");
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

