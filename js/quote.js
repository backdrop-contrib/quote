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

    var quoteSel = $('.quote-sel a');

    quoteSel.attr('href', '#');

    quoteSel.click(function(e) {
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

  }
};

}(jQuery));
