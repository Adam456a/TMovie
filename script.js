function searchFunction() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const listItems = document.querySelectorAll('#torrent-list li');
    
    listItems.forEach(item => {
        const linkText = item.innerText.toLowerCase();
        if (linkText.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// Function to sort the movie list
function sortMovies() {
    const list = document.getElementById('torrent-list');
    const items = Array.from(list.getElementsByTagName('li'));

    items.sort((a, b) => {
        const titleA = a.innerText.toLowerCase();
        const titleB = b.innerText.toLowerCase();
        return titleA.localeCompare(titleB);
    });

    // Remove all existing list items
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Append sorted items back to the list
    items.forEach(item => list.appendChild(item));
}

// Call sortMovies to sort the movies when the page loads
window.onload = sortMovies;
