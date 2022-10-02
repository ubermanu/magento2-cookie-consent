/**
 * Return the instance of the cookie consent lib.
 * @returns {{run: function, show: function, hide: function, showSettings: function, hideSettings: function}}
 */
define([
    'vanilla-cookieconsent'
], function () {
    'use strict';

    if (typeof window['initCookieConsent'] !== 'function') {
        throw new Error('The cookie consent lib is not loaded.');
    }

    // Load the cookie consent lib once.
    var cookieConsent =  window.initCookieConsent();

    return function () {
        return cookieConsent;
    }
});
