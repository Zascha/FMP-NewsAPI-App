'use strict';

import * as constants from '../modules/constants.js';
import NewsRequest from '../classes/newsRequest.js';
import News from '../classes/news.js';

export function toNewsRequest(category, language, country) {
    return new NewsRequest(category, language, country);
}

export function toNewsArray(responseObject) {
    var newsRawArray = responseObject[constants.jsonNewsObjectDataKey];

    return newsRawArray.map(function (item) {
        return converJsonObjectToNewsObject(item);
    });
}

function converJsonObjectToNewsObject(jsonObject) {
    return new News(
        jsonObject[constants.jsonNewsObjectTitleKey],
        jsonObject[constants.jsonNewsObjectDescriptioKey],
        jsonObject[constants.jsonNewsObjectUrlKey],
        jsonObject[constants.jsonNewsObjectCategoryKey],
        jsonObject[constants.jsonNewsObjectCountryKey],
        jsonObject[constants.jsonNewsObjectLanguageKey],
    );
}