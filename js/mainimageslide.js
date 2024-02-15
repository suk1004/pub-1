$(document).ready(function () {

  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0; 
  let idx = 0;
  let img_n = $img.length;


  function changeImg(idx){ 

    if(oldidx != idx){ 
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active"); 
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };


  function changeAuto(){

    idx++;

    if(idx > img_n-1){
      idx=0;
    }

    changeImg(idx); 

  }

  timer = setInterval(changeAuto,4000); 

  //하단버튼
  $btn.click(function(){

    clearInterval(timer); 
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000); 

  });

  //좌우버튼
  $lbtn.click(function(){

    clearInterval(timer);
    idx--;
    if(idx < 0){
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);

  });

  $rbtn.click(function(){

    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx); 
    timer = setInterval(changeAuto,4000);

  });

});