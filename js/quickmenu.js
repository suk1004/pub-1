$(document).ready(function(){

  let nold=0;
  
  //다음보기
  $(".qui_btn .qui_right").click(function(){
  
    $(".qui ul").stop(true,true).animate({marginLeft:"-=90px"},500,function(){
      $(".qui ul li:first-child").appendTo(".qui ul"); //첫번째 이미지가 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });
  
  
  });
  
  
  //이전보기
  $(".qui_btn .qui_left").click(function(){
    
    $(".qui ul").stop(true,true).animate({marginLeft:"+=90px"},500,function(){
      $(".qui ul li:last-child").prependTo(".qui ul"); //마지막 이미지가 맨앞으로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });
  
  });
  
  });