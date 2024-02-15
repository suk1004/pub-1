$(document).ready(function(){
  

  $(".gnb").hover(function(){
  $(this).find(".sub_all").slideDown(500,"easeOutBounce");
  },function(){
    $(this).find(".sub_all").stop().slideUp();
  });

});