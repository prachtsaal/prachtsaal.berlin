window.addEventListener('DOMContentLoaded', (event) => {
    fetch('../js/data.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.querySelector('.grid');
            data.forEach(item => {
                const tile = document.createElement('div');
                tile.className = 'tile';

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.heading;
                tile.appendChild(img);

                const h2 = document.createElement('h2');
                h2.textContent = item.heading;
                tile.appendChild(h2);

                grid.appendChild(tile);
            });
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});
