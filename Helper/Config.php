<?php

namespace Ubermanu\CookieConsent\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Store\Model\ScopeInterface;

class Config extends AbstractHelper
{
    /**@#+
     * Configuration paths
     */
    const XML_PATH_COOKIE_CONSENT_ENABLED = 'web/cookie_consent/enabled';
    /**@#-*/

    public function isEnabled()
    {
        return $this->scopeConfig->isSetFlag(self::XML_PATH_COOKIE_CONSENT_ENABLED, ScopeInterface::SCOPE_STORE);
    }
}
