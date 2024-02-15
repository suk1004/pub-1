$(document).ready(function(){

  let nold=0;
  
  //다음보기
  $(".nright").click(function(){
  
    nnew=nold+1;
    nnum=$(".issu_list li").length;
  
    if(nnew<nnum){ //이미지 전체개수보다 적으면 수행
      $(".issu_list li").eq(nold).hide();
      $(".issu_list li").eq(nnew).show();
      nold=nnew;
    }
  
  });
  
  
  //이전보기
  $(".nleft").click(function(){
  
    nnew=nold-1;
  
    if(nnew>=0){
      $(".issu_list li").eq(nold).hide();
      $(".issu_list li").eq(nnew).show();
      nold=nnew;
    }
  
  });
  
  });