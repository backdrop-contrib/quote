QUOTE.MODULE
------------

This module adds a 'quote' link below nodes and comments. When clicked, the contents of the node or comment are placed into a new comment enclosed with special markup that indicates it is quoted material. 

This module also features a filter which translates the special markup into html code.

When output by Drupal, the quote will be displayed with special formatting to indicate the material has been quoted.


INSTALLATION
------------

The "quote.module" and "quote.css" files should be uploaded to "modules/quote/".

Quote.module must be enabled by via the 'administer/modules' interface. 


FILTER
------

The Quote filter should be activated for each input format that you want to have it available (input filters are edited via the 'administer/filters' interface). 

For best effect, the Quote filter must be applied *after* any filters that replace HTML, and *before* the Linebreak filter. (Filters can be rearranged by using the Weight selectors within the 'rearrange filters' tab.)

Additionally, the Quote filter must be applied *before* the BBCode filter if you have the optional bbcode.module installed.


Technically, the Quote filter is optional. If it is not activated, users will see the raw code instead of the themed output (see FORMAT below to see examples of the raw code output).


FORMAT
------

Quoted content can be placed between [quote] tags in order to be displayed as a quote:

[quote]This is a simple quote.[/quote]


There is an optional attribute which allows quotes to cite the author:

[quote=author's name]This is a quote with an attribution line.[/quote]


THEME
-----

There are two css rules located in "quote.css" which can be altered to change the display of the quotes.

'quote-msg' controls the display of the quote content.
'quote-author' controls the display of the attribution line.


The default "quote.css" rules are designed for Drupal's default Bluemarine theme. By default, quoted content is placed into an indented box, which has a light gray background.


Alternatively, the rules from "quote.css" can be copied into your theme's "style.css" files. If you do this, remember to remove "quote.css" from the "modules/quote/" folder.
