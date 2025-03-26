//site wide cursor
const site_wide_cursor = document.querySelector('.cursors.site-wide');

document.addEventListener('mouseenter', () => {
    site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor);

function TrackCursor(evt) {
    const w = site_wide_cursor.clientWidth;
    const h = site_wide_cursor.clientWidth;
    site_wide_cursor.style.transform = 
        `translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
}
//VIDEO MODAL!
// Get modal and elements
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Open the modal with a YouTube video
function openModal(videoId) {
    modal.style.display = "block";
    document.getElementById("videoContainer").innerHTML = `
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.getElementById("videoContainer").innerHTML = ""; // Remove the video when closing
}

// Close the modal if clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("videoContainer").innerHTML = ""; // Remove the video when closing
    }
}
