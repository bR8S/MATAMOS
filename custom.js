const cursor = document.querySelector('.cursor')
const cursorMb = document.querySelector('.cursor-mb')
const cursorBg = document.querySelector('.bg-cursor')
const projects = document.querySelectorAll('.project')
const previews = document.querySelectorAll('.preview')
const socials = document.querySelectorAll('.social__link')
const projectLinks = document.querySelectorAll('.preview-link')
const projectLinksMobile = document.querySelectorAll('.preview-link-mobile')
const detailsOverlay = document.querySelector('.details-overlay')
const details = document.querySelector('.details')

const cursorXLine = cursor.querySelector('.cursor-horizontal-line')
const cursorYLine = cursor.querySelector('.cursor-vertical-line')

const cursorArrowLine1 = cursor.querySelector('.cursor-arrow-line-1')
const cursorArrowLine2 = cursor.querySelector('.cursor-arrow-line-2')
const cursorArrowLine3 = cursor.querySelector('.cursor-arrow-line-3')

const cursorCloseLine1 = cursor.querySelector('.cursor-close-line-1')
const cursorCloseLine2 = cursor.querySelector('.cursor-close-line-2')

let cursorX, cursorY, cursorBgX, cursorBgY, diffX, diffY, speed, prevCursorX, prevCursorY
cursorBgX = 0
cursorBgY = 0
prevCursorX = 0
prevCursorY = 0
speed = 0.005

function updateCursorPosition(event) {
    if(!cursorBg.classList.contains('show')){
        cursorBg.classList.add('show')
    }
    
    cursorX = event.clientX
    cursorY = event.clientY

    diffX = cursorX - cursorBgX
    diffY = cursorY - cursorBgY

    cursorBgX += diffX * speed
    cursorBgY += diffY * speed

    cursor.style.left = cursorX + "px"
    cursor.style.top = cursorY + "px"
    
    cursorBg.style.left = cursorBgX + "px"
    cursorBg.style.top = cursorBgY + "px"
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
    const previewImageOverlay = previews[index]?.querySelector('.preview-image__overlay')
    const previewServices = previews[index]?.querySelector('.preview-services')
    const previewOutline = previews[index]?.querySelector('.preview-outline')
    const previewClient = previews[index]?.querySelector('.preview-client')
    const previewDescription = previews[index]?.querySelector('.preview-description')

    const previewServicesHeader = previews[index]?.querySelector('.preview-services .preview-header')
    const previewOutlineHeader = previews[index]?.querySelector('.preview-outline .preview-header')
    const previewClientHeader = previews[index]?.querySelector('.preview-client .preview-header')

    const previewServicesParagraph = previews[index]?.querySelector('.preview-services .preview-paragraph')
    const previewOutlineParagraph = previews[index]?.querySelector('.preview-outline .preview-paragraph')
    const previewClientParagraph = previews[index]?.querySelector('.preview-client .preview-paragraph')

    const previewText = previews[index]?.querySelector('.preview-image__text')
    const previewLink = previews[index]?.querySelectorAll('.preview-link')
    const previewLinkMobile = previews[index]?.querySelectorAll('.preview-link-mobile')

    detailsOverlay?.classList.add('active')
    details?.classList.add('active')
    previews[index]?.classList.add('active')
    cursorMb?.classList.add('active')

    previewImageOverlay?.offsetWidth // Forces reflow
    previewImageOverlay?.classList.add('active')

    let previewServiceParagraphLines = previewServicesParagraph?.querySelectorAll('span') || []
    let previewOutlineParagraphLines = previewOutlineParagraph?.querySelectorAll('.line') || []
    let previewClientParagraphLines = previewClientParagraph?.querySelectorAll('.line') || []
     
    if (!previewOutlineParagraphLines?.length && !previewClientParagraphLines?.length) {
        splitParagraphText(previewOutlineParagraph)
        splitParagraphText(previewClientParagraph)
    }   

    previewOutlineParagraphLines = previewOutlineParagraph?.querySelectorAll('.line')
    previewClientParagraphLines = previewClientParagraph?.querySelectorAll('.line')
    
    previewServices?.classList.add('active')
    previewOutline?.classList.add('active')
    previewClient?.classList.add('active')
    previewDescription?.classList.add('active')

    previewServicesHeader?.classList.add('active')
    previewOutlineHeader?.classList.add('active')
    previewClientHeader?.classList.add('active')

    gsap.to(previewServiceParagraphLines, {duration: 0.325, top: 0, stagger: 0.05, opacity: 1, ease: "power2.out", delay: 0.9})
    gsap.to(previewOutlineParagraphLines, {duration: 0.325, top: 0, stagger: 0.05, opacity: 1, ease: "power2.out", delay: 0.9})
    gsap.to(previewClientParagraphLines, {duration: 0.325, top: 0, stagger: 0.05, opacity: 1, ease: "power2.out", delay: 0.9})

    previewLink?.forEach(link => {
        link.classList.add('active')
    })

    previewLinkMobile?.forEach(link => {
        link.classList.add('active')
    })

    previewText.classList.add('active')
}

function closeDetails(event){
    const previewImageOverlay = document?.querySelectorAll('.preview-image__overlay')
    const previewServices = document?.querySelectorAll('.preview-services')
    const previewServicesHeader = document?.querySelectorAll('.preview-services .preview-header')
    const previewServicesParagraph = document?.querySelectorAll('.preview-services .preview-paragraph')
    const previewOutline = document?.querySelectorAll('.preview-outline')
    const previewOutlineHeader = document?.querySelectorAll('.preview-outline .preview-header')
    const previewOutlineParagraph = document?.querySelectorAll('.preview-outline .preview-paragraph')
    const previewClient = document?.querySelectorAll('.preview-client')
    const previewClientHeader = document?.querySelectorAll('.preview-client .preview-header')
    const previewClientParagraph = document?.querySelectorAll('.preview-client .preview-paragraph')
    const previewLink = document?.querySelectorAll('.preview-link')
    const previewLinkMobile = document?.querySelectorAll('.preview-link-mobile')
    const previewText = document?.querySelectorAll('.preview-image__text')

    let previewServiceParagraphLines = []

    previewServicesParagraph?.forEach(paragraph => {
       previewServiceParagraphLines?.push(paragraph?.querySelectorAll('span'))
    })

    let previewOutlineParagraphLines = []

    previewOutlineParagraph?.forEach(paragraph => {
       previewOutlineParagraphLines?.push(paragraph?.querySelectorAll('.line'))
    })

    let previewClientParagraphLines = []

    previewClientParagraph?.forEach(paragraph => {
       previewClientParagraphLines?.push(paragraph?.querySelectorAll('.line'))
    })

    previewParagraphLinesOpacity(previewServiceParagraphLines)
    previewParagraphLinesOpacity(previewClientParagraphLines)
    previewParagraphLinesOpacity(previewOutlineParagraphLines)
    
    detailsOverlay?.classList.remove('active')
    details?.classList.remove('active')
    previews?.forEach(preview => preview.classList.remove('active'))
    cursorMb?.classList.remove('active')

    previewImageOverlay?.forEach(overlay => {
        if(overlay?.classList.contains('active')){
            overlay?.classList.remove('active')
        }
    })

    previewServices?.forEach(service => {
        service?.classList.remove('active')
    })

    previewOutline?.forEach(outline => {
        outline?.classList.remove('active')
    })

    previewClient?.forEach(client => {
        client?.classList.remove('active')
    })

    previewServicesHeader?.forEach(header => {
        header?.classList.remove('active')
    })

    previewOutlineHeader?.forEach(header => {
        header?.classList.remove('active')
    })

    previewClientHeader?.forEach(header => {
        header?.classList.remove('active')
    })

    previewServicesParagraph?.forEach(paragraph => {
        paragraph?.classList.remove('active')
    })

    previewOutlineParagraph?.forEach(paragraph => {
        paragraph?.classList.remove('active')
    })

    previewClientParagraph?.forEach(paragraph => {
        paragraph?.classList.remove('active')
    })

    previewLink?.forEach(link => {
        link.classList.remove('active')
    })

    previewLinkMobile?.forEach(link => {
        link.classList.remove('active')
    })

    previewText?.forEach(text => {
        text?.classList.remove('active')
    })
}

function previewParagraphLinesOpacity(previewParagraphLines){
    previewParagraphLines?.forEach(line => {
            line.forEach( subline => {
                if(subline?.style){
                    subline.style.opacity = '0'
                }
            })
    })
}

function splitParagraphText(paragraph){
    gsap.registerPlugin(SplitText) 
    const split = SplitText.create(paragraph, {
        type: "lines",
        linesClass: "line++"
    })
    split.lines
}

// handles updating custom cursor position
window.addEventListener('mousemove', event => updateCursorPosition(event))

let timeoutId;
const delay = 100; // Delay in milliseconds

window.addEventListener('mousemove', (event) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    cursorBg.classList.remove('show')
  }, delay);
});

document.addEventListener("DOMContentLoaded", () => { 
    //splitParagraphText(clientParagraphs)
    //splitParagraphText(outlineParagraphs)
    //splitParagraphText(serviceParagraphs)
})

projects.forEach(project => project.addEventListener('mousemove', event => updateCursorHover(event)))
projects.forEach(project => project.addEventListener('mouseleave', event => updateCursorHover(event)))
projects.forEach((project, index) => project.addEventListener('click', event => openDetails(event, index)))

socials.forEach(social => social.addEventListener('mousemove', event => updateCursorSocialHover(event)))
socials.forEach(social => social.addEventListener('mouseleave', event => updateCursorSocialHover(event)))

projectLinks.forEach(social => social.addEventListener('mousemove', event => updateCursorSocialHover(event)))
projectLinks.forEach(social => social.addEventListener('mouseleave', event => updateCursorSocialHover(event)))

detailsOverlay.addEventListener('mousemove', event => updateCursorClose(event))
detailsOverlay.addEventListener('mouseleave', event => updateCursorClose(event))
detailsOverlay.addEventListener('click', event => {
    closeDetails(event) 
    updateCursorClose(event)
})

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.key === 'Backspace') {
        closeDetails(event)
        updateCursorClose(event)
    }
})

cursorMb.addEventListener('click', event => closeDetails(event))