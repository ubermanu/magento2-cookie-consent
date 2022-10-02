<?php

namespace Ubermanu\CookieConsent\Block\Html\Link;

use Magento\Framework\View\Element\Html\Link;

class CookiePreferences extends Link
{
    /**
     * @var string
     */
    protected $_template = 'html/link/cookie_preferences.phtml';

    /**
     * @inerhitDoc
     */
    protected function _toHtml()
    {
        if (!$this->getDataUsingMethod('id')) {
            $this->setDataUsingMethod('id', $this->getJsId());
        }

        return parent::_toHtml();
    }
}
