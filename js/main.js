"use strict";
$('a.yak[href^="#"]').bind("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
  }, 750);
 

  if ($(this).hasClass('yak-menu')) {
        if ($(window).width() <= 767) {
          $('header .menu').slideUp(300);
          $('.mob-menu').removeClass('active');
        }
      }
     
      return false;
});
$(function () {
  jQuery(document).ready(function ($) {
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
      if (isSafari){
        console.log("hello")
      }

    $(".btn-blue-big.chat").click(function (e) {
      e.preventDefault();
      $('#quest').modal('show');
      $("body").addClass("mobile-fix")
    });
    
    $(".btns__link.chat").click(function (e) {
      e.preventDefault();
      var screenWidth = window.screen.width
      window.usedeskMessenger.openChat();
      $("#uw-main-button").addClass("active")
    
    
    });
   

    $("form .nav li a").click(function(){
      let pm = $(this).text();
      $("#for-radios").val(pm)
      console.log($("#for-radios").val())
    })
    $(".btn-outline").click(function(){
      $("body").removeClass("mobile-fix")
    })
    
    $(".modal .yak").click(function(){
      $("body").removeClass("mobile-fix")
      $(this).closest(".modal").modal("hide");
    })

    $("#quest .modal-content__close,#quest .close").click(function(){

     
      // window.usedeskMessenger.close("chat");
      window.usedeskMessenger.close();
    })
    

    
    $('.slider-contact').slick({
      infinite: true,
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
      infinite: true,
      arrows: true,
      focusOnSelect: true,
      variableWidth: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M6.6665 16L25.3332 16M25.3332 16L17.3332 8M25.3332 16L17.3332 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' + '</svg>\n</button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M6.6665 16L25.3332 16M25.3332 16L17.3332 8M25.3332 16L17.3332 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' + '</svg>\n</button>',
      responsive: [{
        breakpoint: 767,
        settings: {
          infinite: true,
          variableWidth: false,
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
    $("[href='#tab-2']").click(function(){
      // console.log("click123")
      $("#prof").val(' ')
      $("#prof-test-fp").val(" ")
    });
    $("[href='#tab-1']").click(function(){
      // console.log("click123")
      // $("#prof").val(' ')

      $("#prof-test").val(" ")
      $("#prof-test-fp").val("")
    });

    $(document).on("focusin", "#graj", function() {
      $(this).prop('readonly', true);  
   });
   
   $(document).on("focusout", "#graj", function() {
      $(this).prop('readonly', false); 
   });
   $(document).on("focusin", "#graj2", function() {
    $(this).prop('readonly', true);  
 });
 
 $(document).on("focusout", "#graj2", function() {
    $(this).prop('readonly', false); 
 });
    // $("#tab-1 .form_options").click(function(){
    


    //   var checkboxes = [];
    //   $('#tab-1 .form_options input:checked').each(function(){
    //     //добавляем значение каждого флажка в этот массив
       
    //   });
    //   /*объединяем массив в строку с разделителем-запятой. Но лучше подобные вещи хранить в массиве. Для наглядности - вывод в консоль.*/
    //   console.log(checkboxes)
    //   $("#for-prof").val((checkboxes.join(',')))
      
    // })

    $("#tab-2 .form_options").click(function(){
    


      var checkboxes2 = [];
      $('#tab-2 .form_options input:checked').each(function(){
        //добавляем значение каждого флажка в этот массив

      });
      console.log()
      /*объединяем массив в строку с разделителем-запятой. Но лучше подобные вещи хранить в массиве. Для наглядности - вывод в консоль.*/
  
      $("#for-profs").val((checkboxes2.join(',')))
      
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
    // $('a[href^="#"].yak').click(function () {
    //   var elementClick = $(this).attr("href");
    //   elementClick = elementClick.substr(1);
    //   var destination = $(elementClick).offset().top;
    //   $('body,html').animate({
    //     scrollTop: destination
    //   }, 1100);

    //   if ($(this).hasClass('yak-menu')) {
    //     if ($(window).width() <= 767) {
    //       $('header .menu').slideUp(300);
    //       $('.mob-menu').removeClass('active');
    //     }
    //   }

    //   return false;
    // });
    $('.spoler .title ').click(function () {
      $(this).toggleClass('active');
      $(this).siblings('.hide-text').slideToggle(300);
    });
    // $('[href="#tab-2"]').click(function () {
    //   $('.checkbox input').prop('required', true);
    // });
    // $('[href="#tab-1"]').click(function () {
    //   $('.checkbox input').prop('required', false);
    // });
    // $('#tab-2 .checkbox').click(function () {
    //   $("#tab-2 .checkbox").each(function (index) {
    //     if ($(this).find('input').is(':checked')) {
    //       $('.checkbox input').prop('required', false);
    //       return false;
    //     } else {
    //       $('.checkbox input').prop('required', true);
    //     }
    //   });
    // });
    $("#tab-2 .checkbox").click(function(){
      if($('#tab-2 .checkbox input').is(":checked")){
        $("#prof-test").val(" ");
        return
      }
      else{
        $("#prof-test").val("");
        return
      }
     
       
    })
    $("#tab-1 .checkbox").click(function(){
      // $("#prof-test-fp").val(" ");

      if($('#tab-1 .checkbox input').is(":checked")){
        $("#prof-test-fp").val(" ");
        console.log("12312321")
        return
      }
      else{
        console.log("errow")
        $("#prof-test-fp").val("");
        return
      }
  })
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
    // $("[name='graj2']").click(function () {
    //   $('#graj2').modal('show');
    // });
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
    $("#graj2 li").click(function () {
      $('.modal').modal('hide');
      $("[name='graj2']").val($(this).text());
      $("[name='graj2']").addClass("active");
      // $("#for-graj").val($(this).text());
    });
   
    $('.mob-menu').click(function () {
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
    center: [55.736914, 37.641764],
    // Нижний Новгород
    zoom: 16
  }); // Создание метки

  var myPlacemark = new ymaps.Placemark( // Координаты метки
  [55.736914, 37.641764], {}, {
    iconImageHref: '../img/map.svg',
    // картинка иконки
    iconImageSize: [36, 42],
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
    graj:"required",
    graj2:"required",
    test1:"required",
    test2:"required",
  
    
  },
  messages: {
    name: "Это поле обязательно к заполнению",
    phone: "Это поле обязательно к заполнению",
    graj: "Это поле обязательно к заполнению",
    graj2:"Выберите способ связи",
    test1:"Выберите профессии",
    test2:"Выберите профессии",
    
  },

  submitHandler: function() {

    var form_data = $(".oformlenie form").serialize();
      $.ajax({
        type: "POST",
        url: "send.php",
        data: form_data,
        success: function success() {
          $(".modal").modal('hide');
          $(".oformlenie form").trigger("reset");
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

// function validate() {
//   var userName = document.getElementById("name");
//   var userPassword = document.getElementById("phone");


//   if(!userName.value) {
//     userName.addClass.("error")
//     return false;
//   }

//   if(!userPassword.value) {
//     userPassword.style.border = "2px solid red";
//     return false;
//   }


//   return true;

// }

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


