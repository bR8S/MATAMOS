const cursor = document.querySelector('.cursor')
const projects = document.querySelectorAll('.project')
const previews = document.querySelectorAll('.preview')
const socials = document.querySelectorAll('.social__link')
const detailsOverlay = document.querySelector('.details-overlay')
const details = document.querySelector('.details')

const cursorXLine = document.querySelector('.cursor-horizontal-line')
const cursorYLine = document.querySelector('.cursor-vertical-line')

const cursorArrowLine1 = document.querySelector('.cursor-arrow-line-1')
const cursorArrowLine2 = document.querySelector('.cursor-arrow-line-2')
const cursorArrowLine3 = document.querySelector('.cursor-arrow-line-3')

const cursorCloseLine1 = document.querySelector('.cursor-close-line-1')
const cursorCloseLine2 = document.querySelector('.cursor-close-line-2')

let cursorX, cursorY

function updateCursorPosition(event) {
    cursorX = event.clientX
    cursorY = event.clientY
    cursor.style.left = cursorX + "px"
    cursor.style.top = cursorY + "px"
}

function updateCursorHover(event) {
    if(event.type == 'mousemove') {
        cursor.classList.add('cursor-hover-state')
        cursorXLine.classList.add('show')
        cursorYLine.classList.add('show')
    }
    else if (event.type == 'mouseleave'){
        cursor.classList.remove('cursor-hover-state')
        cursorXLine.classList.remove('show')
        cursorYLine.classList.remove('show')
    }
}

function updateCursorSocialHover(event) {
    if(event.type == 'mousemove') {
        cursor.classList.add('cursor-hover-state')
        cursorArrowLine1.classList.add('show')
        cursorArrowLine2.classList.add('show')
        cursorArrowLine3.classList.add('show')
    }
    else if (event.type == 'mouseleave'){
        cursor.classList.remove('cursor-hover-state')
        cursorArrowLine1.classList.remove('show')
        cursorArrowLine2.classList.remove('show')
        cursorArrowLine3.classList.remove('show')
    }
}

function updateCursorClose(event) {
    if(event.type == 'mousemove') {
        cursor.classList.add('cursor-hover-state')
        cursorCloseLine1.classList.add('show')
        cursorCloseLine2.classList.add('show')
    }
    else if (event.type == 'mouseleave'){
        cursor.classList.remove('cursor-hover-state')
        cursorCloseLine1.classList.remove('show')
        cursorCloseLine2.classList.remove('show')
    }
    else if (event.type == 'click') {
        cursor.classList.remove('cursor-hover-state')
        cursorCloseLine1.classList.remove('show')
        cursorCloseLine2.classList.remove('show')
    }
}

function openDetails(event, index) {
    detailsOverlay.classList.add('active')
    details.classList.add('active')
    previews[index].classList.add('active')
}

function closeDetails(event){
    detailsOverlay.classList.remove('active')
    details.classList.remove('active')
    previews.forEach(preview => preview.classList.remove('active'))
}

// handles updating custom cursor position
window.addEventListener('mousemove', event => updateCursorPosition(event))

projects.forEach(project => project.addEventListener('mousemove', event => updateCursorHover(event)))
projects.forEach(project => project.addEventListener('mouseleave', event => updateCursorHover(event)))
projects.forEach((project, index) => project.addEventListener('click', event => openDetails(event, index)))

socials.forEach(social => social.addEventListener('mousemove', event => updateCursorSocialHover(event)))
socials.forEach(social => social.addEventListener('mouseleave', event => updateCursorSocialHover(event)))

detailsOverlay.addEventListener('mousemove', event => updateCursorClose(event))
detailsOverlay.addEventListener('mouseleave', event => updateCursorClose(event))
detailsOverlay.addEventListener('click', event => {
    closeDetails(event) 
    updateCursorClose(event)
})