"use strict";

$(function () {
  jQuery(document).ready(function ($) {
    $("form").submit(function (e) {
      e.preventDefault();
      var form_data = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "send.php",
        data: form_data,
        success: function success() {
          $(".modal").modal('hide');

          if ($('.nav a.active').hasClass('senk')) {
            $("#senk").modal('show');
          } else {
            $("#senk1").modal('show');
          }
        }
      });
    });
    $('.slider-contact').slick({
      infinite: false,
      arrows: true,
      focusOnSelect: true,
      variableWidth: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M6.6665 16L25.3332 16M25.3332 16L17.3332 8M25.3332 16L17.3332 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' + '</svg>\n</button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M6.6665 16L25.3332 16M25.3332 16L17.3332 8M25.3332 16L17.3332 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' + '</svg>\n</button>',
      responsive: [{
        breakpoint: 767,
        settings: {
          infinite: true,
          arrows: true,
          adaptiveHeight: true,
          focusOnSelect: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('.slider-kak').slick({
      infinite: false,
      arrows: true,
      focusOnSelect: true,
      variableWidth: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M6.6665 16L25.3332 16M25.3332 16L17.3332 8M25.3332 16L17.3332 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' + '</svg>\n</button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M6.6665 16L25.3332 16M25.3332 16L17.3332 8M25.3332 16L17.3332 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' + '</svg>\n</button>',
      responsive: [{
        breakpoint: 767,
        settings: {
          infinite: true,
          arrows: true,
          adaptiveHeight: true,
          focusOnSelect: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('#console, #doc').on('hidden.bs.modal', function (event) {
      $("#senk").modal('show');
    });
    $("[name='colvo']").on('keyup', function () {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
    }); //$(".scroll").mCustomScrollbar();

    $("[name='phone']").mask("+7 (999) 999-99-99");
    $('a[href^="#"].yak').click(function () {
      var elementClick = $(this).attr("href");
      elementClick = elementClick.substr(1);
      var destination = $(elementClick).offset().top;
      $('body,html').animate({
        scrollTop: destination
      }, 1100);

      if ($(this).hasClass('yak-menu')) {
        if ($(window).width() <= 767) {
          $('header .menu').slideUp(300);
          $('.mob-menu').removeClass('active');
        }
      }

      return false;
    });
    $('.spoler .title ').click(function () {
      $(this).toggleClass('active');
      $(this).siblings('.hide-text').slideToggle(300);
    });
    $('[href="#tab-2"]').click(function () {
      $('.checkbox input').prop('required', true);
    });
    $('[href="#tab-1"]').click(function () {
      $('.checkbox input').prop('required', false);
    });
    $('#tab-2 .checkbox').click(function () {
      $("#tab-2 .checkbox").each(function (index) {
        if ($(this).find('input').is(':checked')) {
          $('.checkbox input').prop('required', false);
          return false;
        } else {
          $('.checkbox input').prop('required', true);
        }
      });
    });
    $(".modal-content").swipe({
      //Generic swipe handler for all directions
      swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction === 'down') {
          $('.modal').modal('hide');
        }
      }
    });
    $("[name='graj']").click(function () {
      $('#graj').modal('show');
    });
    $("[name='prof']").click(function () {
      $('#prof').modal('show');
    });
    $("#prof li").click(function () {
      $('.modal').modal('hide');
      $("[name='prof']").val($(this).text());
    });
    $("#graj li").click(function () {
      $('.modal').modal('hide');
      $("[name='graj']").val($(this).text());
    });
    $(".chat").click(function (e) {
      e.preventDefault();
      window.usedeskMessenger.open('chat');
    });
    $('.mob-menu ').click(function () {
      $(this).toggleClass('active');
      $('.menu').slideToggle(300);
    });
    $('.hide-mob ').click(function () {
      $(this).toggleClass('active');
      $(this).siblings('.hide-mob-con').slideToggle(300);

      if ($(this).hasClass('sld')) {
        $('.slider-contact-container').slideToggle(300);
      }

      if ($(this).hasClass('sld1')) {
        $('.slider-kak-container').slideToggle(300);
      }
    });
    var script = document.createElement('script');
    script.src = '//api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU';
    document.getElementsByTagName('head')[0].appendChild(script);
    setTimeout(function () {
      ymaps.ready(init);
    }, 1500);
  });
});

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap = new ymaps.Map('map', {
    // При инициализации карты, обязательно нужно указать
    // ее центр и коэффициент масштабирования
    center: [55.675443, 37.734389],
    // Нижний Новгород
    zoom: 13
  }); // Создание метки

  var myPlacemark = new ymaps.Placemark( // Координаты метки
  [55.675443, 37.744389], {}, {
    iconImageHref: '../img/map.svg',
    // картинка иконки
    iconImageSize: [38, 42],
    // размеры картинки
    iconImageOffset: [-6, -10] // смещение картинки

  }); // Добавление метки на карту

  myMap.geoObjects.add(myPlacemark);
}