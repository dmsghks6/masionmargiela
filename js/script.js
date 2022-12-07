
$(document).ready(function(){
  // --> 이게 리사이즈 보다 밑에 있음 왜 작동을 안하는지....
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('active');
    $('.hamburger span:first-child').toggleClass('active');
    $('.hamburger span:last-child').toggleClass('active');
  });

  $(window).scroll(function(){

    const sct = $(window).scrollTop();
    

  if(sct >= 300){
    $('.header-area .logo').addClass('active');
    $('.header-area .second-logo').addClass('active')
  }else{
    $('.header-area .logo').removeClass('active');
    $('.header-area .second-logo').removeClass('active')
  }

  
  });



  // 서브메뉴 보이게 -> 이것도 미디어 안에 넣으면 안됨.

  $('.main-menu li').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');
    $(`#${result}`).addClass('active');


    $('.sub-menu-area').addClass('active');

  });

  $('.sub-menu-area').mouseleave(function(){
      $(this).removeClass('active');
  });



  function AOS_MOBILE() {
    if (matchMedia("screen and (max-width: 1800px)").matches) {
  
      $('.aos1').attr('data-aos', 'zoom-in-down');
      $('.aos2').attr('data-aos', 'zoom-in-down');
      $('.aos3').attr('data-aos', 'zoom-in-down');
  
    }
  } // 768px 이하일 때 left_con 의 애니메이션 효과를 fade-down 으로 바꾼다.
  AOS_MOBILE();




  //////////////////////////////////////////////////////////////////////////////////


  AOS.init();
  //리사이즈


 
  // 은환씨 풀이를 조금 적어드릴까 합니다 ㅎㅎ
  var ww =$(window).width();
  // swiper플러그인이 호출되지 않았을때를 확인해보면 undefiend라고 값이 나옵니다
  // 확인은 typeof(swiper)로  확인하실 수 있습니다.
  // 스와이퍼가 실행되고 있을때는 typeof(swiper)가 object로 나옵니다.
  // 그래서 초기설정을 undefined라고 변수에 값을 할당한 후
  // 조건문을 통해서 변수에 재할당을해서 특정 해상도에서 실행되게 됩니다.
  var swiper = undefined;
  function layout(){
    if(ww >= 1140 && swiper == undefined){
      swiper = new Swiper(".secondSwiper",{
        direction: "vertical",
        slidesPerView: 1,
        slidesPerGroups: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // 반복여부
        loop: true,
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else if(ww < 1140 && swiper != undefined){
      swiper.destroy()
      swiper=undefined
      $('.hamburger').click(function(){
        console.log('hi');
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.hamburger span:first-child').toggleClass('active');
        $('.hamburger span:last-child').toggleClass('active');
      });
      
    }
  }
  layout();

  $(window).resize(function(){
    ww = $(window).width();
    layout()
  });
 
  


  
}); //end