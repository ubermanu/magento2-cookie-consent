define([
    'vanilla-cookieconsent',
    'mage/utils/wrapper'
], function (cookieConsent, wrapper) {
    'use strict';

    return function (adwordsFunction) {
        return wrapper.wrap(adwordsFunction, function (fn, config) {
            if (cookieConsent.get('categories')?.includes('analytics')) {
                fn(config);
            } else {
                console.warn('Google Adwords blocked by Cookie Consent');
            }
        });
    };
});
