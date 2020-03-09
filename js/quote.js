(function ($) {

Drupal.behaviors.quote = {
  attach: function(context, settings) {

    function getSelectedText() {
      if (document.getSelection) {
        return document.getSelection().toString();
      }
      else if (window.getSelection) {
        return window.getSelection().toString();
      }
      else if (document.selection) {
        return document.selection.createRange().text;
      }
      return '';
    }

    // TODO: refactor this
    var commentQuoteSel = $('.comment-quote-sel a');
    commentQuoteSel.attr('href', '#');
    var commentQuoteAll = $('.comment-quote-all a');
    commentQuoteAll.attr('href', '#');
    var nodeQuoteSel = $('.node-quote-sel a');
    nodeQuoteSel.attr('href', '#');
    var nodeQuoteAll = $('.node-quote-all a');
    nodeQuoteAll.attr('href', '#');

    var commentArea = $(Drupal.settings.quote.quote_selector);
    var curValue = commentArea.val();

    commentQuoteSel.click(function(e) {
      e.preventDefault();
      var selected = getSelectedText();

      if (selected.length) {
        var parent = $(this).closest('.comment');
        var username = parent.find('a.username').text();
        commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + selected + '</blockquote>');
        commentArea.focus();
      }

    });

    commentQuoteAll.click(function(e) {
      e.preventDefault();
      var parent = $(this).closest('.comment');
      var username = parent.find('a.username').text();
      var alltext = parent.find('.field-name-comment-body').text();
      commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + alltext + '</blockquote>');
      commentArea.focus();
    });

    nodeQuoteSel.click(function(e) {
      e.preventDefault();
      var selected = getSelectedText();

      if (selected.length) {
        var parent = $(this).closest('.node');
        var username = parent.find('a.username').first().text();
        commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + selected + '</blockquote>');
        commentArea.focus();
      }

    });

    nodeQuoteAll.click(function(e) {
      e.preventDefault();
      var parent = $(this).closest('.node');
      var username = parent.find('a.username').first().text();
      var alltext = parent.find('.field-name-body').text();
      commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + alltext + '</blockquote>');
      commentArea.focus();
    });

  }
};

}(jQuery));
