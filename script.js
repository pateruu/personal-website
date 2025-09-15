//========== Changing between project sections ==========//
let button = document.querySelectorAll('.btn-check') //Get the object containing the button class '.btn-check'
let card = document.querySelectorAll('.card-container') //Get the object containing the project cards

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () { //Loop through all the buttons and add a listening event for a user click
    let dataFilter = this.getAttribute('button-target')

    for (let k = 0; k < card.length; k++) { //Loop through every card and hide it 
      card[k].classList.remove('active');
      card[k].classList.add('hide');

      if (card[k].getAttribute('card-group') == dataFilter) { //If the card category corresponds to the button active, show it
        card[k].classList.add('active'); //Add the active css class
        card[k].classList.remove('hide'); //Remove the hide clss class
      }
    }
  })
}

//========== Select hardware project by default ==========//
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnradiopcb').click();
});

//========== Skills slide in animation ==========//
if (/Mobi/.test(navigator.userAgent)) {
  // If this device is a mobile user then don't do anything
} else {
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("triggerAnimation", entry.isIntersecting); //If the object is in the viewport trigger the slide in animation
    });
  };

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

  // Attach observer to every [skills-columns] element:
  const ELs_inViewport = document.querySelectorAll('.skills-columns');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });
}

var typed = new Typed('.typewriter-title', {
  strings: [ 'Seeking <b>Winter 2026</b> Internships',
    'Computer Engineering @ <b>University of Waterloo</b>',
    'Prev @ <b>Pinkbyte, NCR</b>'
  ],
  typeSpeed: 35,
  loop: true,
  backDelay: 3000,
});