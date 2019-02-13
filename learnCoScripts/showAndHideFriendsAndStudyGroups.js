// ==UserScript==
// @name         Learn show/hide friends & study groups
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a menu to toggle the display of friends and study groups on the lesson pages
// @author       Guy Bryant
// @match        https://learn.co/tracks/full-stack-web-development-v6/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.onload = function(){
let redAssessmentBanner = document.getElementById("js--region-banner")
    redAssessmentBanner.style.display = "none"
let upcomingStudyGroup = document.getElementById("js--region-sidebar-footer")
    upcomingStudyGroup.style.display = "none"
let friends = document.getElementById("js--friends-widget")
    friends.style.display = "none"

let tamperDiv = document.createElement('div')
    tamperDiv.innerText = "Using Tampermonkey!"
    tamperDiv.classList.add("site-header_nav-item")
    tamperDiv.style.paddingLeft = "50px"
    tamperDiv.style.color = "red"

let menubar = document.getElementsByClassName("flex-grid--center-y")[1]
    menubar.appendChild(tamperDiv)

let tamperMenu = document.createElement("ul")

let showHideFriends = document.createElement("li")
    showHideFriends.innerText = "Show Friends"
    showHideFriends.style.display = "none"
    showHideFriends.style.padding = "10px"
    tamperMenu.appendChild(showHideFriends)
let showHideStudyGroups = document.createElement("li")
    showHideStudyGroups.innerText = "Show Study Groups"
    showHideStudyGroups.style.display = "none"
    showHideStudyGroups.style.padding = "10px"
    tamperMenu.appendChild(showHideStudyGroups)
let showHideRedAssessmentBanner = document.createElement("li")
    showHideRedAssessmentBanner.innerText = "Show Red Assessment Banner"
    showHideRedAssessmentBanner.style.display = "none"
    showHideRedAssessmentBanner.style.padding = "10px"
    tamperMenu.appendChild(showHideRedAssessmentBanner)

    tamperDiv.appendChild(tamperMenu)

    tamperDiv.addEventListener("mouseenter", function( event ) {
     showHideFriends.style.display = "block"
     showHideStudyGroups.style.display = "block"
     showHideRedAssessmentBanner.style.display = "block"
     tamperDiv.style.paddingTop = "108px"
    })
    tamperDiv.addEventListener("mouseleave", function( event ) {
     showHideFriends.style.display = "none"
     showHideStudyGroups.style.display = "none"
     showHideRedAssessmentBanner.style.display = "none"
     tamperDiv.style.paddingTop = "0px"
    })

    showHideFriends.addEventListener("click", function( event ) {
        if (friends.style.display == "none") {
            friends.style.display = "block"
            showHideFriends.innerText = "Hide Friends"
        } else {
         friends.style.display = "none"
            showHideFriends.innerText = "Show Friends"
        }
    })
    showHideStudyGroups.addEventListener("click", function( event ) {
        if (upcomingStudyGroup.style.display == "none") {
            upcomingStudyGroup.style.display = "block"
            showHideStudyGroups.innerText = "Hide Study Groups"
        } else {
         upcomingStudyGroup.style.display = "none"
            showHideStudyGroups.innerText = "Show Study Groups"
        }
    })
    showHideRedAssessmentBanner.addEventListener("click", function( event ) {
        if (redAssessmentBanner.style.display == "none") {
            redAssessmentBanner.style.display = "block"
            showHideRedAssessmentBanner.innerText = "Hide Annoying Banner"
        } else {
         redAssessmentBanner.style.display = "none"
            showHideRedAssessmentBanner.innerText = "Show Annoying Banner"
        }
    })
}
})();
