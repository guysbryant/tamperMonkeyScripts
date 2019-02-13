// ==UserScript==
// @name         Progress Bar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add progress bar to learn.co profile page
// @author       guysbryant
// MY NAME IS LISTED IN THE PATH BELOW, REPLACE THAT WITH YOUR NAME LISTED IN THE ADDRESS BAR WHEN YOU ARE IN YOUR PROFILE
// @match        https://learn.co/guysbryant
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//DID YOU REPLACE MY NAME WITH YOURS AT THE END OF THE @match FROM LINE 8 ABOVE? 
//YOU WILL NEED TO REPLACE MY NAME WITH YOURS FOR THE CODE TO LOAD A PROGRESS BAR FOR YOU
window.onload = function(){
    let lessonsCompletedElement = document.getElementsByClassName("heading--level-4")[8]
    let completedLessons = parseInt(lessonsCompletedElement.innerText.split('/')[0])
    let totalLessons = parseInt(lessonsCompletedElement.innerText.split('/')[1])
    let percentComplete = Math.floor((completedLessons / totalLessons) * 100)

    let targetLocation = document.getElementsByClassName("level")[1]
    let progressContainer = document.createElement("div")
        progressContainer.style.height = "50px"
        progressContainer.style.width = "400px"
        progressContainer.style.border = "3px solid black"
        progressContainer.style.margin = "0 auto -50px"

    targetLocation.appendChild(progressContainer)

    let progressSpan = document.createElement("span")
        progressSpan.style.width = `${percentComplete}%`
        progressSpan.innerText = `${percentComplete}%`
        progressSpan.style.backgroundColor = "#75B74F"
        progressSpan.style.height = "100%"
        progressSpan.style.textAlign = "center"
        progressSpan.style.lineHeight = "50px"
        progressSpan.style.color = "white"
        progressSpan.style.borderRight = "2px solid black"
        progressSpan.style.float = "left"
        progressSpan.style.fontSize = "2em"

    progressContainer.appendChild(progressSpan)
}
})();
