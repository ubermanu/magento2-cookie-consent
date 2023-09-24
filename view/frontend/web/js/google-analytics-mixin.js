define([
    'vanilla-cookieconsent',
    'mage/utils/wrapper'
], function (cookieConsent, wrapper) {
    'use strict';

    return function (analyticsFunction) {
        return wrapper.wrap(analyticsFunction, function (fn, config) {
            if (cookieConsent.get('categories')?.includes('analytics')) {
                fn(config);
            } else {
                console.warn('Google Analytics blocked by Cookie Consent');
            }
        });
    };
});
