
          // toggle menu button

          $(document).ready(function() {
                $(".menu-icon").on("click", function() {
                      $("nav ul").toggleClass("showing");
                });
          });

          // Scrolling Effect
          $(window).on("scroll", function() {
                if($(window).scrollTop()) {
                      $('nav').addClass('black');
                }

                else {
                      $('nav').removeClass('black');
                }
          })

          // Responsive Side Menu

          function openSlideMenu(){
            document.getElementById('side-menu').style.width = '250px';

            document.getElementById('main').style.marginLeft = '250px';
          }


          function closeSlideMenu(){
            document.getElementById('side-menu').style.width = '0px';

            document.getElementById('main').style.marginLeft = '0px';
          }
