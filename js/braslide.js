$(document).ready(function(){

    function bannerAuto(){

      $(".bra ul").stop(true,true).animate({marginLeft:"-=260px"},300,function(){			
        $(".bra ul li:first-child").appendTo(".bra ul"); 
        $(this).css({marginLeft:"0px"}); 
      });	
  
    };
    bauto = setInterval(bannerAuto,4000);

  let nold=0;
  
  //다음보기
  $(".bra_btn .bra_right").click(function(){
  
    $(".bra ul").stop(true,true).animate({marginLeft:"-=260px"},300,function(){
      $(".bra ul li:first-child").appendTo(".bra ul");
      $(this).css({marginLeft:"0px"});
    });
  
  
  });
  
  
  //이전보기
  $(".bra_btn .bra_left").click(function(){
    
    $(".bra ul").stop(true,true).animate({marginLeft:"+=260px"},300,function(){
      $(".bra ul li:last-child").prependTo(".bra ul"); 
      $(this).css({marginLeft:"0px"}); 
    });
  
  });

    //마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....
    $(".bra").hover(function(){ 
      clearInterval(bauto);
    }, function(){
      bauto = setInterval(bannerAuto,4000);
    });
  
  });