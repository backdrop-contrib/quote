This module adds a 'quote' link below nodes and comments. When clicked, the content of the node or comment is placed into a new comment with special markup to indicate it is quoted material. The module also features a filter which translates the special markup into html.

When output by Drupal, the quote will be displayed with special formatting so that it is clear that the author is quoting the original content.


INSTALLATION

"quote.module" and "quote.css" should be placed in the modules folder. (Alternatively, the entire "quote" folder can be uploaded with the module and css files in it.)

Quote.module must be activated via 'administer/modules'. 


FILTER

The Quote filter should be activated for each input format that should be able to use it (input filters are edited via 'administer/input formats'). 

For best effect, the Quote filter must be applied *after* any filters that replace HTML, and *before* the Linebreak filter. (Filters can be rearranged by using the Weight selectors within the 'rearrange filters' tab.)

Technically, the Quote filter is optional. If it is not activated, users will see the raw code instead of the themed output (see Format below for the raw code output).


FORMAT

Quoted content can be placed between [quote] tags in order to be displayed as a quote:

[quote]This is a simple quote.[/quote]

There is an optional attribute which allows quotes to specify the author:

[quote=author]This is a quote with has an attribution line.[/quote]


THEME

There are two css rules located in "quote.css" which can be altered to change the way quoted material is displayed.

'quote-msg' controls the display of the quote content.
'quote-author' controls the display of the attribution line.

The default "quote.css" is designed for Drupal's default Bluemarine theme. Quoted content is placed into an indented box, which has a gray background.
