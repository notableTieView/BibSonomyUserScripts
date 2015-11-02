// ==UserScript==
// @name        BibSonomy BibTeX Link
// @namespace   notableTieView
// @description adds a quicklink for BibTeX Export to the main menu
// @include     http://www.bibsonomy.org/
// @include     http://www.bibsonomy.org/*
// @version     1
// @grant       none
// ==/UserScript==

bibtexLink = $("#bibtexListExport");
if (bibtexLink.length!=0) {
  $("#bs-navbar-collapse ul").eq(0).append('<li class=""><a href="'.concat(bibtexLink.attr('href')).concat('">BibTeX</a></li>'));
}