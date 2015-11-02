// ==UserScript==
// @name        BibSonomy BibTeX Link
// @namespace   notableTieView
// @description adds a quicklink for BibTeX Export to the main menu
// @include     http://www.bibsonomy.org/
// @include     http://www.bibsonomy.org/*
// @version     1
// @grant       none
// ==/UserScript==

//if ((0!=$("#publications_0").length) || (0!=$("#pubtitle").length)) {

  //$(".wrapper dropdown-menu li")
bibtexLink = $("#bibtexListExport");
if (bibtexLink.length!=0) {
  //var pathname = window.location.href;
  //bibLink = pathname.replace("bibsonomy.org", "bibsonomy.org/bib");
  //if (bibLink.indexOf('bib', bibLink.length-'bib'.length)!= -1) {
   // bibLink = bibLink.concat('/');
  //}
  $("#bs-navbar-collapse ul").eq(0).append('<li class=""><a href="'.concat(bibtexLink.attr('href')).concat('">BibTeX</a></li>'));
}