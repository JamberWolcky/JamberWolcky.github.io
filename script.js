const Url = "https://api-berita-indonesia.vercel.app/antara/politik/";

function createCard(article) {
  return `
    <div class="col-md-4 mb-3">
        <div class="card">
            <img src="${article.thumbnail}" class="card-img-top" alt="${article.title}">
            <div class="card-body shadow d-flex flex-column">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text flex-grow-1 text-justify">${article.description}</p>
                <a href="${article.link}" class="btn btn-primary w3-red ">Lihat Selengkapnya</a>
            </div>
        </div>
    </div>
  `;
}

fetch(Url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response error");
    }
    return response.json();
  })
  .then((data) => {
    const articles = data.data && data.data.posts && Array.isArray(data.data.posts) ? data.data.posts : [];

    const newsContainer = document.getElementById('newsContainer');
    articles.slice(0, 10).forEach((article) => {
      const cardHTML = createCard(article);
      newsContainer.innerHTML += cardHTML;
    });
  })
  .catch((error) => console.error("Error:", error));
