// ==UserScript==
// @name         meg learn hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Guy Bryant w/styling by Meg
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
    tamperDiv.style.position = "relative"
    tamperDiv.style.left = "50px"
    tamperDiv.style.color = "#00BCE1"
    tamperDiv.style.fontWeight = "bold"

let menubar = document.getElementsByClassName("flex-grid--center-y")[1]
    menubar.appendChild(tamperDiv)

let tamperMenu = document.createElement("ul")
    tamperMenu.classList.add("menu__list")
    tamperMenu.style.position = "relative"

let showHideFriends = document.createElement("li")
    showHideFriends.innerText = "Show Friends"
    showHideFriends.classList.add("menu__list__item")
    showHideFriends.style.display = "none"
    showHideFriends.style.padding = "10px"
    showHideFriends.style.border = "1px solid #00BCE1"
    showHideFriends.style.fontWeight = "normal"
    showHideFriends.addEventListener("mouseout", function( event ) {
        showHideFriends.style.fontWeight = "normal"
        showHideFriends.style.color = "#00BCE1"
        showHideFriends.style.backgroundColor = "rgba(0,188,225,0)"
    })
    showHideFriends.addEventListener("mouseover", function( event ) {
        showHideFriends.style.fontWeight = "bold"
        showHideFriends.style.color = "#fff"
        showHideFriends.style.backgroundColor = "rgba(0,188,225,0.4)"
    })
    tamperMenu.appendChild(showHideFriends)
let showHideStudyGroups = document.createElement("li")
    showHideStudyGroups.innerText = "Show Study Groups"
    showHideStudyGroups.classList.add("menu__list__item")
    showHideStudyGroups.style.display = "none"
    showHideStudyGroups.style.padding = "10px"
    showHideStudyGroups.style.borderLeft = "1px solid #00BCE1"
    showHideStudyGroups.style.borderRight = "1px solid #00BCE1"
    showHideStudyGroups.style.fontWeight = "normal"
    showHideStudyGroups.addEventListener("mouseout", function( event ) {
        showHideStudyGroups.style.fontWeight = "normal"
        showHideStudyGroups.style.color = "#00BCE1"
        showHideStudyGroups.style.backgroundColor = "rgba(0,188,225,0)"
    })
    showHideStudyGroups.addEventListener("mouseover", function( event ) {
        showHideStudyGroups.style.fontWeight = "bold"
        showHideStudyGroups.style.color = "#fff"
        showHideStudyGroups.style.backgroundColor = "rgba(0,188,225,0.4)"
    })
    tamperMenu.appendChild(showHideStudyGroups)
let showHideRedAssessmentBanner = document.createElement("li")
    showHideRedAssessmentBanner.innerText = "Show Red Assessment Banner"
    showHideRedAssessmentBanner.classList.add("menu__list__item")
    showHideRedAssessmentBanner.style.display = "none"
    showHideRedAssessmentBanner.style.padding = "10px"
    showHideRedAssessmentBanner.style.border = "1px solid #00BCE1"
    showHideRedAssessmentBanner.style.fontWeight = "normal"
    showHideRedAssessmentBanner.addEventListener("mouseout", function( event ) {
        showHideRedAssessmentBanner.style.fontWeight = "normal"
        showHideRedAssessmentBanner.style.color = "#00BCE1"
        showHideRedAssessmentBanner.style.backgroundColor = "rgba(0,188,225,0)"
    })
    showHideRedAssessmentBanner.addEventListener("mouseover", function( event ) {
        showHideRedAssessmentBanner.style.fontWeight = "bold"
        showHideRedAssessmentBanner.style.color = "#fff"
        showHideRedAssessmentBanner.style.backgroundColor = "rgba(0,188,225,0.4)"
    })
    tamperMenu.appendChild(showHideRedAssessmentBanner)

    tamperDiv.appendChild(tamperMenu)

    tamperDiv.addEventListener("mouseenter", function( event ) {
     showHideFriends.style.display = "block"
     showHideStudyGroups.style.display = "block"
     showHideRedAssessmentBanner.style.display = "block"
     tamperDiv.style.top = "56px"
     tamperMenu.style.top = "9px"
    })
    tamperDiv.addEventListener("mouseleave", function( event ) {
     showHideFriends.style.display = "none"
     showHideStudyGroups.style.display = "none"
     showHideRedAssessmentBanner.style.display = "none"
     tamperDiv.style.top = "0"
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