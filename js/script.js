$(function(){
  $('.gradient--big').height(function(){
    return $(this).parent().height();
  });

  $('.gradient--small').height(function(){
    return $(this).parent().height();
  });

  $('#show_search-mobile').click(function(){
    if ($('.blog__navbarSearch').hasClass('displayed')) { // hide search form
      $('.blog__navbarSearch').removeClass('displayed');
      $('.blog__navbarToggle').removeClass('hide');
      $('#btn-nav-search-mobile').removeClass('blog__closeIcon').addClass('blog__searchIcon-mobile');
      $('#show_search-mobile').removeClass('glyphicon-close').addClass('glyphicon-search').fadeOut(0, function(){
        $(this).fadeIn(500);
      });
    } else { // show search form
      $('.blog__navbarSearch').addClass('displayed');
      $('.blog__navbarToggle').addClass('hide');
      $('#btn-nav-search-mobile').removeClass('blog__searchIcon-mobile').addClass('blog__closeIcon');
      $('#show_search-mobile').removeClass('glyphicon-search').addClass('glyphicon-close').fadeOut(0, function(){
        $(this).fadeIn(500);
      });
    }
  });

  $('#show_search').click(function(){
    if($('#input-search').css('display') == 'none'){
      $('.blog__navbarList').fadeOut(500, function(){
        $('#input-search').fadeIn(500);
        $('#btn-nav-search').removeClass('blog__searchIcon').addClass('blog__closeIcon');
        $('#show_search').removeClass('glyphicon-search').addClass('glyphicon-close').fadeOut(0, function(){
          $(this).fadeIn(500);
        });
      });
      //$('.blog__navbarSearch').addClass('displayed');
    }
    else {
      $('#input-search').fadeOut(500, function(){
        $('.blog__navbarList').fadeIn(500);
        $('#btn-nav-search').removeClass('blog__closeIcon').addClass('blog__searchIcon');
        $('#show_search').removeClass('glyphicon-close').addClass('glyphicon-search').fadeOut(0, function(){
          $(this).fadeIn(500);
        });
      });
    }
  });

  $('.works__tiles').packery({
    itemSelector: '.works__item',
    gutter: 0
  });

  $('.blog__linkContent').packery({
    itemSelector: '.blog__link',
    gutter: 1
  });

  $(window).on('load', function(){
    getHeight();
    get_gradient();
  });

  $(window).on('resize', function(){
    getHeight();
    get_gradient();
  });
});

function getHeight(){
  var headerHeight = $('.header__navbar').css('height');
  $('.content').css('top', headerHeight);
};

function get_gradient(){
  $('.gradient--big').each(function(){
    var elImg = $('.blog__link--big > .thumbnail img').css('height');
    $('.gradient--big').css('height', elImg);
  });

  $('.gradient--small').each(function(){
    var elImg = $('.blog__link--small > .thumbnail img').css('height');
    $('.gradient--small').css('height', elImg);
  });
};