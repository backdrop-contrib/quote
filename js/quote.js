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

    var commentQuoteSel = $('.comment-quote-sel a');
    commentQuoteSel.attr('href', '#');

    commentQuoteSel.click(function(e) {
      e.preventDefault();
      var selected = getSelectedText();

      if (selected.length) {
        var commentArea = $('#edit-comment-body textarea');
        var parent = $(this).closest('.comment');
        var username = parent.find('a.username').text();
        var curValue = commentArea.val();
        commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + selected + '</blockquote>');
        commentArea.focus();
      }

    });

    var commentQuoteAll = $('.comment-quote-all a');
    commentQuoteAll.attr('href', '#');

    commentQuoteAll.click(function(e) {
      e.preventDefault();
      var commentArea = $('#edit-comment-body textarea');
      var parent = $(this).closest('.comment');
      var username = parent.find('a.username').text();
      var alltext = parent.find('.field-name-comment-body').text();
      var curValue = commentArea.val();
      commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + alltext + '</blockquote>');
      commentArea.focus();
    });

    var nodeQuoteSel = $('.node-quote-sel a');
    nodeQuoteSel.attr('href', '#');

    nodeQuoteSel.click(function(e) {
      e.preventDefault();
      var selected = getSelectedText();

      if (selected.length) {
        var commentArea = $('#edit-comment-body textarea');
        var parent = $(this).closest('.node');
        var username = parent.find('a.username').first().text();
        var curValue = commentArea.val();
        commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + selected + '</blockquote>');
        commentArea.focus();
      }

    });

    var nodeQuoteAll = $('.node-quote-all a');
    nodeQuoteAll.attr('href', '#');

    nodeQuoteAll.click(function(e) {
      e.preventDefault();
      var commentArea = $('#edit-comment-body textarea');
      var parent = $(this).closest('.node');
      var username = parent.find('a.username').first().text();
      var alltext = parent.find('.field-name-body').text();
      var curValue = commentArea.val();
      commentArea.val(curValue + '<blockquote><strong>' + username + ' wrote:</strong> ' + alltext + '</blockquote>');
      commentArea.focus();
    });

  }
};

}(jQuery));
