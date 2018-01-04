import spotify from './spotify';
import renderAlbums from './albumList';

const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const albumList = document.getElementById('album-list');

function makeRequest() {
    const albums = spotify.search.albums(searchInput.value);
    albums
        .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (searchInput.value != null) {
            makeRequest();
        }
    });
};
