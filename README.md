# Quote

This module adds a 'quote' link below nodes and comments. When clicked, the
contents of the node or comment are placed into a new comment form.

* For a full description of the module, visit the project page:
  https://github.com/backdrop-contrib/quote

* To submit bug reports and feature suggestions, or to track changes:
  https://github.com/backdrop-contrib/quote/issues


## Requirements

This module requires that the core Comment module is enabled.

## Installation

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.

- Visit the configuration page under Administration > Configuration > Content authoring >
  Quote (admin/config/content/quote) and enter desired settings for the quote modes, content types, CKeditor support, and CSS selectors.

- Go to Structure > Content types, configure a content type to have Open comments, go to any node of the content type and start quoting node and comment texts in your new comments.

## FAQ

Q: Why quoting is not working for nodes?\
A: Make sure to indicate the correct CSS selector for the node body field on the module's configuration page (admin/config/content/quote).

Q: Why quoting is not working for comment?\
A: Make sure to indicate the correct CSS selector for the comment body field on the module's configuration page (admin/config/content/quote).

Q: I want to implement a custom feature for the module/extend the module's functionality.\
A: Please contact [AltaGrade](https://www.altagrade.com) for customizations of
this module as well as Backdrop consulting, installation, development, and customizations.


## Known Issues

While the module correctly detects the commenters names thanks to the <code>a.username</code> selector, unfortunately Backdrop does not provide explicit selector for the node authors. They come as part of submitted date string in form of <code>Wed, 30/11/2022 - 17:18 by Alan Mels</code> instead. So the easiest way of getting node author usernames quoted correctly is to template usernames as standalone link with <code>a.username</code> class.</div>

## Current Maintainers

- [Alan Mels](https://github.com/alanmels).
- Seeking additional maintainers.

## Credits

- Ported to Backdrop CMS by [Alan Mels](https://github.com/alanmels).
- Originally written for Drupal by [Andrei Ivnitskii](https://github.com/ivnish).
- Sponsored by [AltaGrade](https://www.altagrade.com)

## License

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.
