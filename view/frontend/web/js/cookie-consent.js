/**
 * Return the instance of the cookie consent lib.
 * @returns {{run: function, show: function, hide: function, showSettings: function, hideSettings: function}}
 */
define([
    'vanilla-cookieconsent'
], function (initCookieConsent) {
    'use strict';

    // Load the cookie consent lib once.
    var cookieConsent =  initCookieConsent();

    return function () {
        return cookieConsent;
    }
});
