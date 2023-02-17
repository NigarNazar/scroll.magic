document.addEventListener('DOMContentLoaded', () =>{
    let controller = new ScrollMagic.Controller();

    let timeline1 = new TimelineLite();
    timeline1
    .to('.sec1', 4, {
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.sec2', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.sec3', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.sec4', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.sec5', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.sec6', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.sec-section',
        duration: '100%',
        triggerHook: 0,
        offset: '120'
    })
    .setTween(timeline1)
    .setPin('.sec-section')
    .addTo(controller);
})
    
