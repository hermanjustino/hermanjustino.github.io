// Define artist data (customize as needed)
 const artists = [
    {
        id: '1',
        name: 'Dina Roudman',
        description: 'artist + psychotherapist',
        largeImage: '../assets/dina_roudman.jpg',
        headline: 'Dina Roudman',
        detailDescription: 'Never letting rejection get in the way',
        photo: './assets/dina_roudman.jpg',
        photographer: 'Jacqueline Ashton',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 1
    },
    {
        id: '2',
        name: 'Alanka Krajewski',
        description: '',
        largeImage: '../assets/alanka_krajewski.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'My practice revolves around creating unusual and unique visual experiences.',
        photo: './assets/alanka_krajewski.jpg',
        photographer: 'Alanka Krajewski',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '3',
        name: 'Jasmine Kiara',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/jasmine_kiara.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'An entrepreneur at heart, seeing her career as an extension of herself.',
        photo: './assets/jasmine_kiara.jpg',
        photographer: 'Alanka Krajewski',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '4',
        name: 'Aly Jamal',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/aly_jamal.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Nostalgia, hip hop and 90’s influence.',
        photo: './assets/aly_jamal.jpg',
        photographer: '',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '5',
        name: 'Drakes',
        description: 'Elle Patterson wearing By Drakes.',
        largeImage: '../assets/drakes.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'What to expect in his next collection.',
        photo: './assets/drakes.jpg',
        photographer: 'Justynnroque',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '6',
        name: 'Ivan D’Ossa',
        description: '',
        largeImage: '../assets/ivan_dossa.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Manifestations, mood-boards and making it happen. Photographed by Isavisuals. ',
        photo: './assets/ivan_dossa.jpg',
        photographer: 'Justynnroque',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '7',
        name: 'Dcrmilda',
        description: '',
        largeImage: '../assets/dcrmilda.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Becoming the number one DJ in the Czech Republic.',
        photo: './assets/dcrmilda.jpg',
        photographer: 'Justmissedme',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '8',
        name: 'Justin Lah',
        description: '',
        largeImage: '../assets/justin_lah.jpeg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Jordan 1’s into one of one’s.',
        photo: './assets/justin_lah.jpeg',
        photographer: '',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '9',
        name: 'Erica Reid',
        description: '',
        largeImage: '../assets/erica_reid.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'A retro take on surrealism.',
        photo: './assets/erica_reid.jpg',
        photographer: '',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '10',
        name: 'Xavier King',
        description: '',
        largeImage: '../assets/xavier_king.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'The 411, exclusive pieces, and freedom of thought. Rich in Beyond Space.',
        photo: './assets/xavier_king.jpg',
        photographer: 'Zo Mul',
        city: 'Toronto'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '11',
        name: 'DJ Savage',
        description: '',
        largeImage: '../assets/dj_savage.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'From burning and selling CD’s for $5 to curating NYC events.',
        photo: './assets/dj_savage.jpg',
        photographer: 'Outlet',
        city: 'NYC'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '12',
        name: 'Caos Moto',
        description: '',
        largeImage: '../assets/caos_moto.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Rebranding cinderblocks, making beauty from the found.',
        photo: './assets/caos_moto.jpg',
        photographer: 'Outlet',
        city: 'NYC'
        // Add customizable content (images, videos, text) here for Artist 2
    },
    {
        id: '12',
        name: 'Kase Fenley',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        photographer: 'Outlet',
        city: 'NYC'
        // Add customizable content (images, videos, text) here for Artist 2
    },
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
        image.src = artist.largeImage;
        artistPageContainer.appendChild(image);

        const artistText = document.createElement("div");
        artistText.className = "artist_detail_headlines";
        artistPageContainer.appendChild(artistText);

        const artistHeadline = document.createElement("h2");
        artistHeadline.id = "artist_headline";
        artistHeadline.textContent = artist.name;
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
      name.innerHTML = `<a href="./pages/artist.html?artist=${artist.id}" class="gallery_line_1">${artist.name}</a>`;
      caption.appendChild(name);

      const description = document.createElement("p");
      description.id = 'gallery_line_3';
      description.textContent = artist.city;
      caption.appendChild(description);

      const link = document.createElement('div');
      link.innerHTML = `<a href="./pages/artist.html?artist=${artist.id}" class="learn_more_link">See More</a>`;
      caption.appendChild(link);
      
      slideshowContainer.appendChild(slide);
    });
  }

