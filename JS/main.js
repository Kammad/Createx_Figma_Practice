$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active');
    $(this).addClass('directions__filter-btn--active');
  })

  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    waitForAnimate: true,
    speed: 220,
  })

  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.testimonials__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    speed: 350,
    waitForAnimate: true,
    appendDots: $('.testimonials__dots'),
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text').slideToggle()
  // })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    $('.program__acc-link').removeClass('program__acc-link--active')
    $('.program__acc-text').slideUp()
    $(this).addClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideDown()
  })

  let map;

  async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
      center: { lat: 40.10201616093371, lng: -74.22315820664235 },
      zoom: 16,
    });
  }

  initMap();
})