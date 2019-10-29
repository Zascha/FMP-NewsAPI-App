'use strict';

import * as constants from './constants.js';
import * as mapping from './mapping.js';

export function requestNewsData(newsRequest) {
    if (!newsRequest.isValid()) {
        throw new Error("Invalid passed news request.");
    }

    var requestUrl = formRequestUrl(newsRequest);
    var response = getNewsDataAsync(requestUrl);

    return response.then(data => mapping.toNewsArray(data));
}

async function getNewsDataAsync(requestUrl) {
    let response = await fetch(requestUrl);
    let data = await response.json()
    return data;
}

function formRequestUrl(requestParams) {
    var url = constants.baseRequestUrl + requestParams.apiKey;

    url = getUrlWithNewRequestUrlParam(url, constants.requestCategoryParam, requestParams.category);
    url = getUrlWithNewRequestUrlParam(url, constants.requestLanguageParam, requestParams.language);
    url = getUrlWithNewRequestUrlParam(url, constants.requestCountryParam, requestParams.country);

    return url;
}

function getUrlWithNewRequestUrlParam(urlString, urlParam, urlParamValue) {
    if (urlParamValue) {
        urlString += "&" + urlParam + "=" + urlParamValue;
    }

    return urlString;
}