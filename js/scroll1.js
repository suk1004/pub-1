$(document).ready(function(){

  //퀵메뉴 이미지오버

// $(".quick_M li").hover(function(){
//   let qnum = $(this).index()+1;
//   $(this).find("a img").attr({"src":"image/quickMm_01"+qnum+".png"});

// },function(){
//   let qnum = $(this).index()+1;
//   $(this).find("a img").attr({"src":"image/quickM_01"+qnum+".png"});

// });

$(".quick_M .QQ11 img").hover(
  function () {
    $(this).attr("src","image/quickMm_01.png");
  },
  function () {
    $(this).attr("src","image/quickM_01.png");
  }
);

$(".quick_M .QQ22 img").hover(
  function () {
    $(this).attr("src","image/quickMm_02.png");
  },
  function () {
    $(this).attr("src","image/quickM_02.png");
  }
);

$(".quick_M .QQ33 img").hover(
  function () {
    $(this).attr("src","image/quickMm_03.png");
  },
  function () {
    $(this).attr("src","image/quickM_03.png");
  }
);


$(".quick_M .QQ44 img").hover(
  function () {
    $(this).attr("src","image/quickMm_04.png");
  },
  function () {
    $(this).attr("src","image/quickM_04.png");
  }
);


//따라다니는 퀵메뉴
$(window).scroll(function(){ //브라우저에 스크롤이 발생하는 순간부터

  let curpos=$(this).scrollTop()+20;
  $(".quiqui_Q").stop().animate({top:curpos});


});


//top버튼

$(".topmove").click(function(){
  $("html,body").animate({scrollTop:"0"})
});


});