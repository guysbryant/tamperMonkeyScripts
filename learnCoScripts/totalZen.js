// ==UserScript==
// @name         Learn.co Distractions Toggle
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Add a menu to toggle the various distracting elements on the page so I can focus on just the lesson.
// @author       Guy Bryant
// @match        https://learn.co/tracks/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.onload = function(){

// Get all the page items to setup for the rest of the script
let sideBar = document.getElementById("js--region-sidebar")
let mainContent = document.getElementById("js--region-main")
let subHeader = document.getElementById("js--region-subheader")
let siteHeader = document.getElementsByClassName("site-header")[0]
let lessonTitle = document.getElementsByClassName("heading--level-2")[0].innerText
let menubar = document.getElementsByClassName("flex-grid--center-y")[1]

// Study groups and friends should default to hidden
let upcomingStudyGroup = document.getElementById("js--region-sidebar-footer")
    upcomingStudyGroup.style.display = "none"
let friends = document.getElementById("js--friends-widget")
    friends.style.display = "none"

// div to hold the menu
let tamperDiv = document.createElement('div')
    tamperDiv.innerText = "Using Tampermonkey!"
    tamperDiv.classList.add("site-header_nav-item")
    tamperDiv.style.paddingLeft = "50px"
    tamperDiv.style.color = "red"

    menubar.appendChild(tamperDiv)

// Create menu as ul to hold all the menu items
let tamperMenu = document.createElement("ul")

// Create each menu item as an li
let showHideFriends = document.createElement("li")
let showHideStudyGroups = document.createElement("li")
let showHideSideBar = document.createElement("li")

// Zen Mode is a special toggle to hide everything and center the main content with the lesson title located in the upper left corner
let zenMode = document.createElement("li")
    zenMode.addEventListener("click", zenModeToggle)

    // Hide each menu item, set its text value, give it padding, and append it to the menu
    makeMenuItem(showHideFriends, "Friends" , friends, "Show")
    makeMenuItem(showHideStudyGroups, "Study Groups", upcomingStudyGroup, "Show")
    makeMenuItem(showHideSideBar, "Sidebar", sideBar, "Hide")
    makeMenuItem(zenMode, "Zen Mode: OFF")


function makeMenuItem(element, text, target, showOrHide){
    element.style.display = "none"
    element.style.padding = "10px"
    element.style.color = "white"
    element.style.backgroundColor = "rgb(122, 127, 179"
    element.style.border = "1px solid black"
    element.addEventListener("mouseover", (el) => {el.target.style.border = "2px solid black"})
    element.addEventListener("mouseleave", (el) => {el.target.style.border = "1px solid black"})
    tamperMenu.appendChild(element)
    // zenMode doesn't share the rest of this code but the other menu items do so I use showOrHide to differentiate them
    if (showOrHide){
        element.innerText = `${showOrHide} ${text}`
        addClick(element, target, text)
    }else {element.innerText = text}
}
    // Use event listeners to toggle the state of menu items (show or hide)
    tamperDiv.addEventListener("mouseenter", () => toggleMenuItemsShowHide("show"))
    tamperDiv.addEventListener("mouseleave", () => toggleMenuItemsShowHide("hide"))
    tamperDiv.appendChild(tamperMenu)


function toggleMenuItemsShowHide(state){
    if(state == "hide"){hideMenuItems()}
    else{showMenuItems()}
}

let menuItems = tamperMenu.childNodes
function showMenuItems(){
    menuItems.forEach((li) => {li.style.display = "block"})
    tamperMenu.style.paddingTop = "108px"
}
function hideMenuItems(){
    menuItems.forEach((li) => {li.style.display = "none"})
    tamperMenu.style.paddingTop = "0px"
}

// Dynamically add the click listener to each element passed in
function addClick(element, target, text){
    element.addEventListener("click", () => {
        if (target == sideBar){
            if (target.style.display == "none"){
                mainContent.style.minWidth = "0%"
            }else{mainContent.style.minWidth = "100%"}
        }
        if (target.style.display == "none") {
            target.style.display = "block"
            element.innerText = `Hide ${text}`
        } else {
            target.style.display = "none"
            element.innerText = `Show ${text}`
        }
    })
}

// Zen Mode will hide everything except for the main content of the lesson
// Zen Mode will display the lesson title, turned sideways, in the upper left corner, colored red.
// To exit Zen Mode, you will click on the lesson title
let titleElement = document.createElement("div")
function addZenTitle(){
    lessonTitle = document.getElementsByClassName("heading--level-2")[0].innerText
    titleElement.style.fontSize = ".5em"
    titleElement.style.display = "block"
    titleElement.style.position = "fixed"
    titleElement.style.color = "red"
    titleElement.style.top = "10px"
    titleElement.style.left = "10px"
    titleElement.innerText = lessonTitle
    titleElement.style.writingMode = "vertical-rl"
    titleElement.style.textOrientation = "sideways"
    titleElement.style.cursor = "pointer"
    titleElement.addEventListener("click", zenModeToggle)
    titleElement.addEventListener("mouseover", () => {titleElement.style.fontSize = "1.5em"})
    titleElement.addEventListener("mouseleave", () => {titleElement.style.fontSize = ".5em"})
    document.body.appendChild(titleElement)
}

function zenModeToggle(){
    if (zenMode.innerText == "Zen Mode: ON"){
        titleElement.style.display = "none"
        sideBar.style.display = "block"
        mainContent.style.minWidth = "0%"
        subHeader.style.display = "block"
        mainContent.style.position = "absolute"
        siteHeader.style.display = "flex"
        zenMode.innerText = "Zen Mode: OFF"
    }else{
        sideBar.style.display = "none"
        mainContent.style.minWidth = "100%"
        subHeader.style.display = "none"
        mainContent.style.position = "relative"
        friends.style.display = "none"
        siteHeader.style.display = "none"
        addZenTitle()
        zenMode.innerText = "Zen Mode: ON"
   }
}

}})();
