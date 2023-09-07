const addImageButton = document.getElementById('add-image');
const addVideoButton = document.getElementById('add-video');
const blogMedia = document.querySelector('.blog-media');

addImageButton.addEventListener('click', () => {
    const imageURL = prompt('Enter the URL of the image:');
    if (imageURL) {
        const imageElement = document.createElement('img');
        imageElement.src = imageURL;
        blogMedia.appendChild(imageElement);
    }
});

addVideoButton.addEventListener('click', () => {
    const videoURL = prompt('Enter the URL of the video:');
    if (videoURL) {
        const videoElement = document.createElement('video');
        videoElement.src = videoURL;
        videoElement.controls = true;
        blogMedia.appendChild(videoElement);
    }
});
