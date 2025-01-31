function sortMovies() {
    const list = document.getElementById('torrent-list');
    const items = Array.from(list.getElementsByTagName('li'));

    items.sort((a, b) => {
        const titleA = a.innerText.match(/Season (\d+)/i);
        const titleB = b.innerText.match(/Season (\d+)/i);

        const numA = titleA ? parseInt(titleA[1], 10) : 0;
        const numB = titleB ? parseInt(titleB[1], 10) : 0;

        return numA - numB; // Sort numerically
    });

    // Remove all existing list items
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Append sorted items back to the list
    items.forEach(item => list.appendChild(item));
}

// Function to filter the movie list based on search input
function searchFunction() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const listItems = document.querySelectorAll('#torrent-list li');

    listItems.forEach(item => {
        const linkText = item.querySelector('a') ? item.querySelector('a').innerText.toLowerCase() : '';
        if (linkText.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// Call sortMovies to sort the movies when the page loads
window.onload = sortMovies;
