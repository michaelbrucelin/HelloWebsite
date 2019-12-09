$(document).ready(function(){
	$('.swiper-wrapper').css("transform","translateX(0)");
	var i = 0;
	var x=$('.swiper-slide').length;
	var y=$('.swiper-container').width();
	var time =setInterval(function(){
				if(i<x&&i!=0){
					$('.swiper-wrapper').css("transform","translateX("+ i*-y +"px)");
					$('.swiper-pagination-bullet').eq(i).addClass('swiper-pagination-bullet-active');
					$('.swiper-pagination-bullet').eq(i-1).removeClass('swiper-pagination-bullet-active');
					i++;
				}else{
					i=0;
					$('.swiper-wrapper').css("transform","translateX("+ i*-y +"px)");
					$('.swiper-pagination-bullet').eq(i).addClass('swiper-pagination-bullet-active');
					$('.swiper-pagination-bullet').eq(x-1).removeClass('swiper-pagination-bullet-active');
					i++;
				}	
	},3000)
})