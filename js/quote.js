(function ($) {

  'use strict';

  Drupal.behaviors.quote = {
    attach: function (context, settings) {

      let quoteLimit = Drupal.settings.quote.quote_limit;
      let quoteCkeditor = Drupal.settings.quote.quote_ckeditor_support;

      function getSelectedText() {
        if (document.getSelection) {
          return document.getSelection().toString().substring(0, quoteLimit);
        }

        return '';
      }

      function getCommentArea() {
        let commentArea = $(Drupal.settings.quote.quote_selector);

        if (quoteCkeditor && $('.cke_wysiwyg_frame').length) {
          commentArea = $('.cke_wysiwyg_frame').contents().find('body');
        }

        return commentArea;
      }

      function getCommentAreaCurValue(commentArea) {
        let curValue = commentArea.val();

        if (quoteCkeditor && $('.cke_wysiwyg_frame').length) {
          curValue = commentArea.html();
        }

        return curValue;
      }

      function setCommentAreaValue(commentArea, value) {
        commentArea.val(value);

        if (quoteCkeditor && $('.cke_wysiwyg_frame').length) {
          commentArea.html(value);
        }
      }

      $('.comment-quote-sel a').once().click(function (e) {
        e.preventDefault();
        let selected = getSelectedText();
        if (selected.length) {
          let commentArea = getCommentArea();
          let curValue = getCommentAreaCurValue(commentArea);
          let parent = $(this).closest('.comment');
          let username = parent.find('a.username').text();
          let value = curValue + '<blockquote><strong>' + Drupal.t('@author wrote:', {'@author': username}) + '</strong> ' + selected + '</blockquote>';
          setCommentAreaValue(commentArea, value);
          commentArea.focus();
        }

      });

      $('.comment-quote-all a').once().click(function (e) {
        e.preventDefault();
        let commentArea = getCommentArea();
        let curValue = getCommentAreaCurValue(commentArea);
        let parent = $(this).closest('.comment');
        let username = parent.find('a.username').text();
        let alltext = parent.find(Drupal.settings.quote.quote_selector_comment_quote_all).text().substring(0, quoteLimit);
        let value = curValue + '<blockquote><strong>' + Drupal.t('@author wrote:', {'@author': username}) + '</strong> ' + alltext + '</blockquote>';
        setCommentAreaValue(commentArea, value);
        commentArea.focus();
      });

      $('.node-quote-sel a').once().click(function (e) {
        e.preventDefault();
        let selected = getSelectedText();
        if (selected.length) {
          let commentArea = getCommentArea();
          let curValue = getCommentAreaCurValue(commentArea);
          let parent = $(this).closest('.node');
          let username = parent.find('a.username').first().text();
          let value = curValue + '<blockquote><strong>' + Drupal.t('@author wrote:', {'@author': username}) + '</strong> ' + selected + '</blockquote>';
          setCommentAreaValue(commentArea, value);
          commentArea.focus();
        }
      });

      $('.node-quote-all a').once().click(function (e) {
        e.preventDefault();
        let commentArea = getCommentArea();
        let curValue = getCommentAreaCurValue(commentArea);
        let parent = $(this).closest('.node');
        let username = parent.find('a.username').first().text();
        let alltext = parent.find(Drupal.settings.quote.quote_selector_node_quote_all).text().substring(0, quoteLimit);
        let value = curValue + '<blockquote><strong>' + Drupal.t('@author wrote:', {'@author': username}) + '</strong> ' + alltext + '</blockquote>';
        setCommentAreaValue(commentArea, value);
        commentArea.focus();
      });
    }
  };

}(jQuery));
