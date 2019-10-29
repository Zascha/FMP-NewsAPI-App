'use strict';

import * as mapping from '../modules/mapping.js';
import * as request from '../modules/sendRequests.js';
import * as render from '../ux-modules/render.js';

export function handleNewsApiRequest(category, language, country) {
    var newsRequest = mapping.toNewsRequest(category, language, country);
    var result = request.requestNewsData(newsRequest);

    result.then(data => render.renderNewsData(data));
}