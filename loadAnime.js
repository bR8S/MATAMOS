 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText) 

    // create a timeline
    let load_tl = gsap.timeline()

    const overlayHorizontalLines = document.querySelectorAll('.horizontal-line-1, .horizontal-line-2')
    const overlayVerticalLines = document.querySelectorAll('.vertical-line-1, .vertical-line-2')

    const logo = document.querySelector('.header-logo')
    const leftHandText = document.querySelectorAll('.about p')
    const socialsText = document.querySelectorAll('.info-contact .header, .social__link')
    const bioText = document.querySelector('.about-text')
    const projectSelectors = document.querySelectorAll('.project-selector')

    const projectDivider = document.querySelector('.project-divider')
    const projectsContainer = document.querySelector('.projects')

    const workProjects = document.querySelectorAll('.work-projects .project')
    const stars = document.querySelectorAll('.star, .star-small')
    const banner = document.querySelector('.banner')

    // the target can be selector text, an element, or an Array of elements
    let split = SplitText.create(bioText,
        {
            type: "lines, words",
            linesClass: "line++"
        }
    )
    split.lines

    const bioLines = document.querySelectorAll('.about-text .line')
    
    load_tl.to(logo, {duration: 0.75, top: 0, opacity: 1, ease: "power2.out", delay: 0.5}, "+=0.25")
        .to(stars, {duration: 0.75, stagger: 0.15, opacity: 1, ease: "power2.out"}, "-=0.25")
        .to(projectSelectors, {duration: 0.15, stagger: 0.125, opacity: 1, ease: "power2.out"}, "-=1")
        .to(projectDivider, {duration: 0.65, width: '100%', opacity: 1, ease: "power2.out"}, "-=0.5")
        .to(projectsContainer, {duration: 0.15, opacity: 1, ease: "power2.out"}, "-=0.1")
        .to(workProjects, {duration: 0.35, stagger: 0.15, opacity: 1, ease: "power2.out"}, "+=0.1")

    gsap.to(overlayHorizontalLines, {duration: 1, width: '100%', stagger: 0.25, ease: "power2.inOut"})
    gsap.to(overlayVerticalLines, {duration: 1, height: '100%', stagger: 0.25, ease: "power2.inOut"})

    gsap.to(socialsText, {duration: 0.45, top: 0, stagger: 0.15, opacity: 1, ease: "power2.out", delay: 2.25})
    gsap.to(leftHandText, {duration: 0.45, top: 0, stagger: 0.15, opacity: 1, ease: "power2.out", delay: 2.65})
    gsap.to(bioLines, {duration: 0.45, top: 0, stagger: 0.15, opacity: 1, ease: "power2.out", delay: 2.65})
    gsap.to(bioText, {duration: 0.01, top: 0, opacity: 1, ease: "power2.out", delay: 2.65})
    gsap.to(banner, {duration: 0.5, top: 'calc(100% - 56px)', opacity: 1, ease: "power2.out", delay: 3.5}) 
 });
