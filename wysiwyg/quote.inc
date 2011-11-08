<?php
/**
 * @file
 *
 */

/**
 * Implementation of hook_wysiwyg_plugin().
 */
function quote_quote_plugin() {
  $plugins = array();

  $plugins['quote'] = array(
    'title' => t('Quote'),
    'vendor url' => 'http://drupal.org/project/quote',
    'icon file' => 'quote.png',
    'icon title' => t('Add selected text between quote tags.'),
    'settings' => array(),
  );
  return $plugins;
}