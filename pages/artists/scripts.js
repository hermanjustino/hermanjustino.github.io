const artistGallery = document.getElementById("artistGallery");

// Sample artist data
const artists = [
    {
        name: "Artist 1",
        image: "artist1.jpg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID1",
        description: "This is the description for Artist 1."
    },
    {
        name: "Artist 2",
        image: "artist2.jpg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID2",
        description: "This is the description for Artist 2."
    },
    // Add more artists as needed
];

// Create and display artist cards
artists.forEach(artist => {
    const artistCard = document.createElement("div");
    artistCard.className = "artist-card";
    artistCard.dataset.artistName = artist.name;
    artistCard.innerHTML = `<img src="${artist.image}" alt="${artist.name}">`;
    artistCard.addEventListener("click", () => {
        window.location.href = `artist.html?name=${encodeURIComponent(artist.name)}&video=${encodeURIComponent(artist.videoUrl)}&desc=${encodeURIComponent(artist.description)}`;
    });
    artistGallery.appendChild(artistCard);
});
