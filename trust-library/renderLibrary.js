document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('library-container');

  fetch('data/library.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(book => {
        const card = document.createElement('div');
        card.className = 'library-card';
        card.innerHTML = `
          <img src="${book.cover}" alt="${book.title}" class="cover-img">
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Language:</strong> ${book.language}</p>
          <p>${book.description}</p>
          <a href="${book.link}" target="_blank">Read More</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = '<p>Failed to load library data.</p>';
      console.error(err);
    });
});
