(?# Regular Expression Cheatsheet By John Cotterell johnmdcotterell@gmail.com www.cotterzz.com  github.com/cotterzz/)

(?# This is a Regular Expression comment, I'm going to use these to label the rest of the document)

(?# Part 1: Anchors)

^ (?# Start of string)
\A (?# Start of string)
$ (?# End of string)
\Z (?# End of string)
\b (?# Word boundary)
\B (?# Not word boundary)
\< (?# Start of word)
\> (?# End of word)

\c (?# Control character)
\s (?# White space)
\S (?# Not white space)
\d (?# Digit)
\D (?# Not digit)
\w (?# Word)
\W (?# Not word)
\x (?# Hexadecimal digit)
\O (?# Octal digit)

\.

\+

\?

\\

\*

\^

\|

\-

\(\"\, \"\)

\[

\]



 










(?# Example Patterns)
([A-Za-z0-9-]+) (?# Letters, numbers and hyphens)
(\d{1,2}\/\d{1,2}\/\d{4}) (?# Date (e.g. 21/3/2006)
([^\s]+(?=\.(jpg|gif|png))\.\2) (?# jpg, gif or png image)
(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$) (?# Any number from 1 to 50 inclusive)
(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?) (?# Valid hexadecimal colour code)
((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}) (?# String with at least one upper case letter, one lower case letter, and one digit, useful for passwords )
(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}) (?# Email addresses)
(\<(/?[^\>]+)\>) (?# HTML Tags)
(?# Note: These patterns are intended for reference purposes and have not been
extensively tested. Please use with caution and test thoroughly before use.
Will Match)

(?# product key:)
[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}


 
(BlockL)\d\-(...)(\,\"\:|\,\:)(.*)((Block\"\,)|(Block\,))\d\,(True|False)\,\d\d
\"\,(category)\,\d\,(True|False)\,\d\d
(.*)\"\>(.*)\<\/title\>\<img src="(.*)" height="100" width="76">
^(.*)\"aws-internal\/3 aws-sdk-java(.*)\" -

^(.*)82\.11\.108\.82\.(.*)


^\{\"crawlTimeMsec\"\:\"(.*)\]\,\"title\"\:\"

^((.*)(REST\.|82\.11\.108\.82)(.*)
)|5524099ba640946c51c2fda7ca54302ff0a857e57a04c70ad555b75efbbf3f3e www.cotterzz.com 
 
 

