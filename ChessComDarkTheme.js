// ==UserScript==
// @name          LiveChess
// @namespace     http://userstyles.org
// @description	  better
// @author        ceberous
// @homepage      https://creatitees.info
// @include       http://live.chess.com/*
// @include       https://live.chess.com/*
// @include       http://*.live.chess.com/*
// @include       https://*.live.chess.com/*
// @run-at        document-start
// @version       0.1
// ==/UserScript==

(function() {var css = [
	"/* ==== DUCKDUCKGO - Multi-Columns v.5 (new5) ==== */",

	"",
	".boardContainer {",
	" background-color: #000000 !important; ",
	"}",
	"",


	"",
	".gameBorderContainer {",
	" background-color: #000000 !important; ",
	"}",
	"",


	"",
	" #main_bc {",
	" background-color: #000000 !important; ",
    " border-color: #000000 !important; ",
	"}",
	"",

	"",
	" .bs {",
	" background: rgba(0,0,0,0.8); ",
    "",
	"}",
	"",	

	"",
	" #newgamebc {",
	" background-color: #504249 !important; ",
    " border-color: #000000 !important; ",
    "",
	"}",
	"",		

	"",
	" #eventsbc {",
	" background-color: #504249 !important; ",
    " border-color: #000000 !important; ",
    "",
	"}",
	"",

		


	"",
	"/* === END ==== */"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		document.documentElement.appendChild(node);
	}
}
})();
