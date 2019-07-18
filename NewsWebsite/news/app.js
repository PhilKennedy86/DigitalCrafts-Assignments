let newsformat = document.getElementById("newsformat")
let newsArray = Object.values(news)[2]

let articles = newsArray.map(function(article) {
    let author = ``
    if (article.author == null) {
        author = ``
    } else {
        author = article.author
    }
    let title = ``
    if (article.title == null) {
        title = ``
    } else {
        title = article.title
    }
    let description = ``
    if (article.description == null) {
        description = ``
    } else {
        description = article.description
    }
    let url = ``
    if (article.url == null) {
        url = ``
    } else {
        url = article.url
    }
    let urlToImage = ``
    if (article.urlToImage == null) {
        urlToImage = ``
    } else {
        urlToImage = article.urlToImage
    }
    return `<div>
        <h4>${author}</h4>
        <h4>${title}</h4>
        <p>${description}</p>
        <a href="${url}">link</a>
        <img src="${urlToImage}"></img>
        <p>${article.publishedAt}</p>
    </div>`
})
newsformat.innerHTML = articles.join("")