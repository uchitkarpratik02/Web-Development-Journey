const movies = ['Interstellar', 'Inception', 'Avatar', 'Dune'];
const gallery = document.getElementById('gallery');

movies.forEach(movieTitle => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const title = document.createElement('h3');
    title.classList.add('movie-title');
    title.textContent = movieTitle;

    card.append(title);
    gallery.append(card);
});
