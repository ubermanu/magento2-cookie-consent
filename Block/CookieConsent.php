<?php

namespace Ubermanu\CookieConsent\Block;

use Magento\Framework\View\Element\Template;
use Magento\Store\Model\ScopeInterface;
use Ubermanu\CookieConsent\Helper\Config as ConfigHelper;

class CookieConsent extends Template
{
    /**
     * @var ConfigHelper
     */
    protected $configHelper;

    public function __construct(
        Template\Context $context,
        ConfigHelper $configHelper,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->configHelper = $configHelper;
    }

    /**
     * @return bool
     */
    public function isEnabled()
    {
        return $this->configHelper->isEnabled();
    }

    /**
     * @return string
     */
    public function getJsLayout()
    {
        $lang = $this->getLocaleCode();
        $this->jsLayout['current_lang'] = $lang;

        // Merge the common labels with the language specific labels
        if (isset($this->jsLayout['language'])) {
            $this->jsLayout['languages'][$lang] = array_merge($this->jsLayout['language'], $this->jsLayout['languages'][$lang] ?? []);
            unset($this->jsLayout['language']);
        }

        return parent::getJsLayout();
    }

    /**
     * @return mixed
     */
    protected function getLocaleCode()
    {
        return $this->_scopeConfig->getValue('general/locale/code', ScopeInterface::SCOPE_STORE);
    }
}
