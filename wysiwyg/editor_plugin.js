/**
 * Quote module's wysiwyg plgugin.
 *
 *
 *
 * @author Kálmán Hosszu - hosszu.kalman@gmail.com
 */

(function() {
  tinymce.create('tinymce.plugins.quote', {
    /**
     * Initialize the plugin, executed after the plugin has been created.
     *
     * This call is done before the editor instance has finished it's
     * initialization so use the onInit event of the editor instance to
     * intercept that event.
     *
     * @param ed
     *   The tinymce.Editor instance the plugin is initialized in.
     * @param url
     *   The absolute URL of the plugin location.
     */
    init : function(ed, url) {
      // Register the wysiwygH2Plugin execCommand.
      ed.addCommand('quote', function() {
        ed.selection.setContent('[quote]' + ed.selection.getContent() + '[/quote]');
      });
 
      // Register button.
      ed.addButton('quote', {
        title : 'Quote',
        cmd : 'quote',
        image : url + '/img/q.png'
      });
    },
 
    /**
     * Return information about the plugin as a name/value array.
     */
    getInfo : function() {
      return {
        longname : 'Quote',
        author : 'Kalman Hosszu',
        authorurl : 'http://www.kalman-hosszu.com'
      };
    }
  });
 
  // Register plugin.
  tinymce.PluginManager.add('quote', tinymce.plugins.quote);
})();