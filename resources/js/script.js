$(document).ready(function() {

        /*STICKY NAV*/
    $('.js--section-features').waypoint(function(direction) {

        if(direction == "down") 
        {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });

    /*Scrolling buttons */
    $('.js--scroll-plans').click(function() {

        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

    });

    $('.js--scroll-start').click(function() {

        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    
    });

    /*Scrolling navigation */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });


    /*Scroll Animation */

    $('.js--wp-1').waypoint(function(direction) {

        $('.js--wp-1').addClass('animate fadeIn');
    },{
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {

        $('.js--wp-2').addClass('animate fadeInUp');
    },{
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {

        $('.js--wp-3').addClass('animate fadeIn');
    },{
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {

        $('.js--wp-4').addClass('animate pulse');
    },{
        offset: '50%'
    });


    /*Mobile Nav */
    $('.js--mobile-nav').click(function() {

        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round'))
        {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }

    });

    var map = new GMaps({
        div: '.map',
        lat: 12.9344074,
        lng: 77.6199999
      });

      map.addMarker({
        lat:  12.936,
        lng: 77.6038821,
        title: 'Bangalore',
        infoWindow: {
            content: '<p>Christ University</p>'
          }
      });
});

