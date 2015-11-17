// ==UserScript==
// @name         Fix gmail splitview with people pane
// @namespace    http://your.homepage/
// @version      0.1
// @description  Remove the People pane
// @author       Pieter de Zwart
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('td.Bu.y3 {display: none;}');
