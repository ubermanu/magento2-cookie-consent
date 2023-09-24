var config = {
    paths: {
        'vanilla-cookieconsent': 'Ubermanu_CookieConsent/lib/cookieconsent'
    },
    shim: {
        'vanilla-cookieconsent': {
            exports: 'initCookieConsent'
        }
    },
    config: {
        mixins: {
            'Magento_GoogleAnalytics/js/google-analytics': {
                'Ubermanu_CookieConsent/js/google-analytics-mixin': true
            },
            'Magento_GoogleGtag/js/google-analytics': {
                'Ubermanu_CookieConsent/js/google-analytics-mixin': true
            },
            'Magento_GoogleGtag/js/google-adwords': {
                'Ubermanu_CookieConsent/js/google-adwords-mixin': true
            }
        }
    }
}
