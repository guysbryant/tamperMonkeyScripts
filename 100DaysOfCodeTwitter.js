// ==UserScript==
// @name         100daysofcode day tracker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a tracker to the top of twitter for the 100 days of code
// @author       Guy Bryant
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Replace January 01, 2019 with your actual start date
    let startDate = new Date('January 01, 2019')
    // Replace red with whatever color you want your text to be
    let textColor = 'blue'

    let today = new Date()
    let currentDayOfCode = Math.round((today-startDate)/(1000*60*60*24))
    let tamperTag = document.createElement('p')
        tamperTag.style.fontSize = '1rem'
        tamperTag.style.color = textColor
    let tamperLocation = document.getElementsByClassName('bird-topbar-etched')[0]
        tamperLocation.append(tamperTag)
        tamperLocation.style.display = 'inline-block'
        tamperLocation.style.marginTop = '.7em'
        tamperLocation.style.marginLeft = '-25px'
        tamperLocation.className = 'tamper'

     function tamperLocationShift(firstBreakPoint){
        if (firstBreakPoint.matches) {
         tamperLocation.style.width = '20%'
        } else {
         tamperLocation.style.width = '25%'
        }
    }

    function tamperTagText(secondBreakPoint){
       if (secondBreakPoint.matches) {
           tamperLocation.style.width = '30%'
           tamperTag.innerText = `#100DoC: ${currentDayOfCode}/100`
       } else {
           tamperTag.style.marginLeft = '-30px'
           tamperTag.innerText = `#100DaysofCode: ${currentDayOfCode}/100`
       }
    }

    var firstBreakPoint = window.matchMedia("(max-width: 1240px)")
        tamperLocationShift(firstBreakPoint)
        firstBreakPoint.addListener(tamperLocationShift)
    var secondBreakPoint = window.matchMedia("(max-width: 860px)")
        tamperTagText(secondBreakPoint)
        secondBreakPoint.addListener(tamperTagText)
})();
