"use strict";

$(function () {
  jQuery(document).ready(function ($) {
    
    $(".btn-outline-black.chat").click(function (e) {
      e.preventDefault();
      // window.usedeskMessenger.open('chat');
      $('#quest').modal('show');
    });

    $(".btns__link.chat").click(function (e) {
      e.preventDefault();
      window.usedeskMessenger.openChat();
       window.usedeskMessenger.open('chat');
      $(".fiULNP").trigger("click");
    });
    $("form .nav li a").click(function(){
      let pm = $(this).text();
      console.log(pm)
      $("#for-radios").val(pm)
      console.log($("#for-radios").val())
    })

    
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

    $("[name='phone']").on('keyup', function () {
      let phone = $(this).val()
      $("#for-phone").val(phone)
    }); 
  
    $(".form_options").click(function(){
    


      var checkboxes = [];
      $('.form_options input:checked').each(function(){
        //добавляем значение каждого флажка в этот массив

      });
      /*объединяем массив в строку с разделителем-запятой. Но лучше подобные вещи хранить в массиве. Для наглядности - вывод в консоль.*/
  
      $("#for-profs").val((checkboxes.join(',')))
    })

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
   
   
    $("#for-date").val(today)

    $(".nav li:first-child").click(function(){
      $("#for-date2").val('')
      $("#for-date").val(today)
    })
    $(".nav li:nth-child(2)").click(function(){
      $("#for-date2").val(today)
      $("#for-date").val('')
    })
    $("[name='name']").on('keyup', function () {
      let name = $(this).val()
      $("#for-name").val(name)
    }); 
    $("[name='colvo']").on('keyup', function () {
      let colvo = $(this).val()
      $("#for-colvo").val(colvo)
    }); 
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

            $(this).closest(".modal").addClass("hide-modal");
          // $(this).closest(".modal").modal('hide');

          function removeModal() {
            $(".modal-content__close").closest(".modal").modal("hide")
            $(".hide-modal").removeClass("hide-modal")
          }
          
          setTimeout(removeModal, 300);
          // $('.modal').addClass('custom-close');
          // $('.modal').modal('hide');
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
      $("#for-prof").val($(this).text());
      $("[name='prof']").val($(this).text());
      $("[name='prof']").addClass("active");

    });
    $("#graj li").click(function () {
      $('.modal').modal('hide');
      $("[name='graj']").val($(this).text());
      $("[name='graj']").addClass("active");
      $("#for-graj").val($(this).text());
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

$(".modal-content__close").click(function (){
  console.log("close");
  $(this).closest(".modal").addClass("hide-modal");
  // $(this).closest(".modal").modal('hide');

  function removeModal() {
    $(".modal-content__close").closest(".modal").modal("hide")
    $(".hide-modal").removeClass("hide-modal")
  }
  
  setTimeout(removeModal, 300);
});


$("#callback form").validate({
  rules: {
    name: "required",
    phone: "required",
    
  },
  messages: {
    name: "Это поле обязательно к заполнению",
    phone: "Это поле обязательно к заполнению",
    
  },

  submitHandler: function() {
   
    var form_data = $("#callback form").serialize();
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

    return false;
}

});
$(".oformlenie form").validate({
  rules: {
    name: "required",
    phone: "required",
    
  },
  messages: {
    name: "Это поле обязательно к заполнению",
    phone: "Это поле обязательно к заполнению",
    
  },

  submitHandler: function() {
   
    var form_data = $(".oformlenie form").serialize();
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

    return false;
}

});


$(function() {
  $(".oformlenie form").submit(function (event) {
    event.preventDefault();
 
    // Ссылка, которую получили на этапе публикации приложения
    let appLink = "https://script.google.com/macros/s/AKfycbw9FjaZZDLgTVcSWKcX62JKRYaTxntpTavHYjgZO6jPtl1Rpk9Il4DOQI2IpLpsidUG2Q/exec";
 
    // Сообщение при успешной отправке данных
    let successRespond = 'Сообщение успешно отправлено. Посмотрите результат <a target="_blank" href="https://docs.google.com/spreadsheets/d/1XcTivCQL4EZJf1x2kB4UwGj5bAi0sfpx1PwtaKgOWHo/edit?usp=sharing">тут</a>';
 
    // Сообщение при ошибке в отправке данных
    let errorRespond = 'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:smart-landing@ya.ru">smart-landing@ya.ru</a>';
 
    // Id текущей формы
    let form = $('#' + $(this).attr('id'))[0];
 
    // h2 с ответом формы
    let formRespond = $(this).find('.g-form__title_respond');
 
    // h2 с заголовком формы
    let formTitle = $(this).find('.g-form__title_main');
 
    // Блок прелоадера
    let preloader = $(this).find('.g-form__preloader');
 
    // Кнопка отправки формы
    let submitButton = $(this).find('.g-form__button');
 
 
    // FormData
    let fd = new FormData(form);
 
 
    $.ajax({
 
      url: appLink,
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: function(){
 
      
      // Показываем прелоадер
      preloader.css('opacity', '1');
 
      // Делаем неактивной кнопку отправки
      submitButton.prop('disabled', true);
 
      // валидация других полей.
 
    },
 
  }).done(function(res, textStatus, jqXHR) {
 
    if(jqXHR.readyState === 4 && jqXHR.status === 200) {
 
    // Прячем заголовок формы
    formTitle.css({
      'display': 'none'
    });
 
    // Прячем прелоадер
    preloader.css('opacity', '0');
 
    // Выводим ответ формы.
    formRespond.html(successRespond).css('color', '#37b599');
     
    // Возвращаем активность кнопке отправки
    submitButton.prop('disabled', false);
 
      // Очищаем поля формы
      form.reset();
 
    } else {
      formTitle.css({
        'display': 'none'
      });
      formRespond.html(errorRespond).css('color', '#c64b4b');
      preloader.css('opacity', '0');
      setTimeout( () => {
        formRespond.css({
          'display': 'none'
        });
        formTitle.css({
          'display': 'block'
        });
 
        submitButton.prop('disabled', false);
      }, 5000);
 
      console.log('Гугл не ответил статусом 200');
    }
  }).fail(function(res, textStatus, jqXHR) {
    formTitle.css({
      'display': 'none'
    });
    preloader.css('opacity', '0');
    formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
    setTimeout( () => {
      formRespond.css({
        'display': 'none'
      });
      formTitle.css({
        'display': 'block'
      });
      submitButton.prop('disabled', false); 
    }, 5000);
 
    console.log('Не удалось выполнить запрос по указанному в скрипте пути');
  }); 
});
}(jQuery));