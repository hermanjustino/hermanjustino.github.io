// JavaScript code to fetch and display social media feeds goes here
// You'll need to use APIs for Instagram and TikTok to fetch their respective feeds
// You can use libraries like Fetch API or Axios to make the API calls

// Example of how to integrate an Instagram feed using Fetch API
const instagramFeed = document.querySelector(".social-feed");

fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<img src="${post.images.standard_resolution.url}" alt="${post.caption.text}">
      <p>${post.caption.text}</p>`;
      instagramFeed.appendChild(postElement);
    });
  })
  .catch((error) => console.log(error));
