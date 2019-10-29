import $ from "jquery";

import * as handleRequests from '../ux-modules/handleRequests.js'

(function ($) {
    $(".header__filter").click(function () {
        selectFilterLabel(this);
        handleRequests.handleNewsApiRequest(getCategoryFilterValue());
    });

    function selectFilterLabel(label) {
        $(".header__filter").each(function () {
            $(this).removeClass('selected');
        });
        $(label).addClass('selected');
    }

    function getCategoryFilterValue() {
        return !$(".header__filter").last().hasClass('selected')
            ? $(".header__filter.selected").attr('data-value')
            : null;
    }
})($);