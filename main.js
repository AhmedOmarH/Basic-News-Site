async function getNews() {
    const response = await fetch(process.env.CLOUDINARY_KEY3d8, {
        method: "GET"
    });

    const json = await response.json();

    const articles = json.articles;

    const news = document.getElementById("news");

    articles.forEach(article => {
        const div = document.createElement("div");

        if (article.title === "[Removed]") return;

        div.classList.add("news", "col-md-4");
        div.innerHTML = `                
            <div class="mb-5">
                <div class="card">
                    ${article.urlToImage ? `<img src="${article.urlToImage}" class="card-img-top" alt="...">` : ""}
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        ${article.description ? `<p class="card-text">${article.description}</p>` : ""}
                        <a href="${article.url}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        `;
        news.appendChild(div);
    });
}

getNews()