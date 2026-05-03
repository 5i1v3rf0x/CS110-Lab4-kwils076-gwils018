const articles_box = document.querySelector('.articles-box')
const api_key = 'rbAZg9Pwf7DgCg1zYzRwU5s6AW7ewLgZsZSGKhH2kuGKPupH'

async function getData() {
    const sort_option = document.querySelector('input[name="sort-by"]:checked')
    const time_option = document.querySelector('input[name="time-frame"]:checked')
    
    if (sort_option && time_option) {
        const url = "https://api.nytimes.com/svc/mostpopular/v2/" + sort_option.value + "/" + time_option.value + ".json?api-key=" + api_key

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('ERROR');
            }
            const data = await response.json();
            articles_box.innerHTML = "";
            for (let i = 0; i < 5; i++) {
                const article = document.createElement('div');
                const article_heading = document.createElement('div');
                const article_body = document.createElement('div');
                const article_num = document.createElement('span');
                const article_title = document.createElement('a');
                const article_date = document.createElement('span');
                const article_image = document.createElement('img');
                const article_content = document.createElement('span');

                article.classList.add('article-listing');
                article_heading.classList.add('article-heading');
                article_body.classList.add('article-body');
                article_num.classList.add('article-num');
                article_title.classList.add('article-title');
                article_date.classList.add('article-date');
                article_image.classList.add('article-image');
                article_content.classList.add('article-content');

                article_num.textContent = (i + 1) + ")";
                article_title.textContent = data.results[i].title;
                article_title.href = data.results[i].url;
                article_date.textContent = data.results[i].published_date;
                try {
                    article_image.src = data.results[i].media[0]['media-metadata'][2].url;
                    article_image.alt = data.results[i].media[0].caption;
                } catch (error) {
                    article_image.src = "https://placehold.co/120x80/gray/white?text=No+Image+Available"
                    article_image.alt = "Image not available";
                    console.log("Error getting image"); 
                }
                article_content.textContent = data.results[i].abstract;
                // article.innerHTML = `
                //     <h2>${i + 1}) ${data.results[i].title}</h2>
                //     <p>${data.results[i].abstract}</p>
                //     <a href="${data.results[i].url}" target="_blank">Read more</a>
                // `;
                articles_box.appendChild(article);
                article.appendChild(article_heading);
                article.appendChild(article_body);
                article_heading.appendChild(article_num);
                article_heading.appendChild(article_title);
                article_heading.appendChild(article_date);
                article_body.appendChild(article_image);
                article_body.appendChild(article_content);
            }
            console.log(data.results);
        }
        catch (error) {
            console.error(error.message);
        }
    }
}