// scripts.js

 // Define artist data (customize as needed)
 const artists = [
    {
        id: '1',
        name: 'Dorian Schwartz',
        description: 'One sentence description about Artist 1.',
        largeImage: '../assets/artist1_large.jpg',
        headline: 'Dorian Schwartz',
        detailDescription: 'artist + psychotherapist ',
        // Add customizable content (images, videos, text) here for Artist 1
    },
    {
        id: '2',
        name: 'Artist Name 2',
        description: 'One sentence description about Artist 2.',
        largeImage: 'artist2_large.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: 'Two sentence description about Artist 2 and their work.',
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
    }
};
