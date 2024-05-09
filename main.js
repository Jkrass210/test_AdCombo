function hoverParent(element) {
  element.parentNode.classList.add('cards__item--hover');
}

function notHoverParent(element) {
  element.parentNode.classList.remove('cards__item--hover');
}

const burger = document.querySelector('.logo-box__burger');
const nav = document.querySelector('.main__aside');
const overlay = document.querySelector('.overlay');
const linkNav = document.querySelectorAll('.aside__link')

function onStopScroll() {
  const body = document.querySelector('body')
  body.classList.toggle('stop-scroll')
}

function offStopScroll() {
  const body = document.querySelector('body')
  body.classList.remove('stop-scroll')
}

function offnav() {
  burger.classList.remove('logo-box__burger--active')
  nav.classList.remove('main__aside--active')
  overlay.classList.remove('overlay--active')
  offStopScroll()
}

burger.addEventListener('click', function(){
  burger.classList.toggle('logo-box__burger--active')
  nav.classList.toggle('main__aside--active')
  overlay.classList.toggle('overlay--active')
  onStopScroll()
})

overlay.addEventListener('click', function(){
  offnav()
  offStopScroll()
})

linkNav.forEach(function (elem) {
  elem.addEventListener('click', function() {
    offnav()
    offStopScroll()
  })
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    offnav()
    offStopScroll()
  }
});

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function(className, settings) {
    swiper = new Swiper(className, settings);

    if (callback) {
      callback(swiper);
    }
  }

  const checker = function() {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
}

resizableSwiper('(max-width: 610px)', '.price__cards', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.cards__swiper-pagination',
    clickable: true,
  }
});

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent ="00 : " + minutes + " : " + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var display = document.querySelector('#timer');
  var duration = 1800;
  startTimer(duration, display);
};

const patternOne = document.querySelector(".main__pattern1");
const patternTwo = document.querySelector(".main__pattern2");

document.onmousemove = (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  patternOne.style.transform = "translate(-" + x * 30 + "px, -" + y * 80 + "px)"
  patternTwo.style.transform = "translate(-" + x * 100 + "px, -" + y * 20 + "px)"
};
