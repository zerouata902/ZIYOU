
  (function ($) {
  
    "use strict";
  
      // MENU
      $('#sidebarMenu .nav-link').on('click',function(){
        $("#sidebarMenu").collapse('hide');
      });
      
      // CUSTOM LINK
      $('.smoothscroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();
    
        scrollToDiv(elWrapped,header_height);
        return false;
    
        function scrollToDiv(element,navheight){
          var offset = element.offset();
          var offsetTop = offset.top;
          var totalScroll = offsetTop-navheight;
    
          $('body,html').animate({
          scrollTop: totalScroll
          }, 300);
        }
      });
    
    })(window.jQuery);

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const age = document.getElementById("age").value;
  const birthdate = document.getElementById("birthdate").value;
  const level = document.getElementById("level").value;
  const location = document.getElementById("location").value;

  const message = `🧔‍♂️ طلب تسجيل في Ziyou Barber Academy:\n
الاسم: ${fname}
النسب: ${lname}
العمر: ${age}
تاريخ الازدياد: ${birthdate}
المستوى الدراسي: ${level}
مكان السكن: ${location}`;

  const whatsappNumber = "+212676826204"; // ← بدل برقم الواتساب ديال Ziyou
  const encodedMsg = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

  window.open(whatsappURL, "_blank");
});

// scroll effect
window.addEventListener("scroll", function () {
  const box = document.querySelector(".form-box");
  const rect = box.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    box.classList.add("visible");
  }
});


