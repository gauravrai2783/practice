
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const slider = document.querySelector('.slider');
    slider.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#007bff' : '#fff'; /* Blue color when in dark mode */
}

function displayTrendingVideos(videos) {
    const container = document.getElementById('container');

    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video';
        videoDiv.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
                <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                <p>${video.snippet.title}</p>
            </a>
        `;

        container.appendChild(videoDiv);
    });
}

async function fetchTrendingVideos() {
    const apiKey = 'AIzaSyARVlZjRaGF-jZwMtRPlfDfB_Tttmn7KdI';
    const maxResults = 10;
    const regionCode = 'IN'; // India region code
    const chart = 'mostPopular';
    const part = 'snippet';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&chart=${chart}&maxResults=${maxResults}&part=${part}&regionCode=${regionCode}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayTrendingVideos(data.items);
        } else {
            console.error('Error fetching data:', data.error.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchTrendingVideos();

function loadVideo(videoId) {
    const playerContainer = document.getElementById('player-container');
    
    // Create an iframe for the YouTube video
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.width = '560';
    iframe.height = '315';
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay';
    iframe.style.border = 'none';

    // Clear existing content and append the iframe
    playerContainer.innerHTML = '';
    playerContainer.appendChild(iframe);
}

// Event listener for video clicks
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('video-link')) {
        event.preventDefault();
        const videoId = event.target.getAttribute('data-video-id');
        loadVideo(videoId);
    }
});


function loadVideo(videoId) {
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = `
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;
}

// Event listener for video clicks
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('video-link')) {
        event.preventDefault();
        const videoId = event.target.getAttribute('data-video-id');
        loadVideo(videoId);
    }
});





