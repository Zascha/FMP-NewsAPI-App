'use strict';

import $ from "jquery";

export function renderNewsData(newsArray) {
    $('.content').empty();

    newsArray.forEach(item => {
        var newsCardHtml = toNewsCard(item);
        $('.content').append(newsCardHtml);
    })
}

function toNewsCard(news) {
    return '<div class="news-card ' + news.category + '">' +
           '<div class="news-card__title">' + news.title + '</div>' +
           '<div class="news-card__labels">' +
           '<div class="news-card__label ' + news.category + '">' + news.category + '</div>' +
           '<div class="news-card__label">' + news.language + '</div>' +
           '<div class="news-card__label">' + news.country + '</div>' +
           '</div><div class="news-card__description">' + news.description + '</div>' +
           '<div class="news-card__link"><img src="sources/link.svg">' +
           '<a href="' + news.link + '">Read more</a></div></div>';
}