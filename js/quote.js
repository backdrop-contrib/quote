(function ($) {

  'use strict';

  Drupal.behaviors.quote = {
    attach: function (context, settings) {

      var quoteLimit = Drupal.settings.quote.quote_limit;

      function getSelectedText() {
        if (document.getSelection) {
          return document.getSelection().toString().substring(0, quoteLimit);
        }

        return '';
      }

      $('.comment-quote-sel a').click(function (e) {
        e.preventDefault();
        var selected = getSelectedText();

        if (selected.length) {
          var commentArea = $(Drupal.settings.quote.quote_selector);
          var curValue = commentArea.val();
          var parent = $(this).closest('.comment');
          var username = parent.find('a.username').text();
          commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + selected + '</blockquote>');
          commentArea.focus();
        }
      });

      $('.comment-quote-all a').click(function (e) {
        e.preventDefault();
        var commentArea = $(Drupal.settings.quote.quote_selector);
        var curValue = commentArea.val();
        var parent = $(this).closest('.comment');
        var username = parent.find('a.username').text();
        var alltext = parent.find(Drupal.settings.quote.quote_selector_comment_quote_all).text().substring(0, quoteLimit);
        commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + alltext + '</blockquote>');
        commentArea.focus();
      });

      $('.node-quote-sel a').click(function (e) {
        e.preventDefault();
        var selected = getSelectedText();

        if (selected.length) {
          var commentArea = $(Drupal.settings.quote.quote_selector);
          var curValue = commentArea.val();
          var parent = $(this).closest('.node');
          var username = parent.find('a.username').first().text();
          commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + selected + '</blockquote>');
          commentArea.focus();
        }
      });

      $('.node-quote-all a').click(function (e) {
        e.preventDefault();
        var commentArea = $(Drupal.settings.quote.quote_selector);
        var curValue = commentArea.val();
        var parent = $(this).closest('.node');
        var username = parent.find('a.username').first().text();
        var alltext = parent.find(Drupal.settings.quote.quote_selector_node_quote_all).text().substring(0, quoteLimit);
        commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + alltext + '</blockquote>');
        commentArea.focus();
      });
    }
  };

}(jQuery));
