$(function(){
	// 모바일 탭버튼
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("static");
		$(".mobile").addClass("active");
		$(".dim").addClass("active");

	});
	// 모바일 탭 그림자버튼
	$(".dim, .close").click(function(e){
		e.preventDefault();
		mobile_tab();

	});
	function mobile_tab(){
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".dim").removeClass("active");
		$("#GNB > ul > li").removeClass("active");
	}
	// 모바일 메뉴
	// var n=0;
	$("#GNB > ul > li").click(function(e){
		e.preventDefault();
			// n=$(window).index();
			if($(this).hasClass("active") == false){
				$("#GNB > ul > li").removeClass("active");
				$(this).addClass("active");
				$("#GNB ul ul").slideUp(300);
				$(this).children("ul").slideDown(300);
			}
			else{
				$("#GNB > ul > li").removeClass("active");
				$(this).children("ul").slideUp(300);
			}
	});

	// 이벤트 배너
	var count=0;
	var distance=0;
	var limarginright=0;


	$(".prev").click(function(e){
		e.preventDefault();
		if(count > 0){
			count--;
		}
		else {
			return;
		}
		distance=count*247*(-1);
		$(".banner_zone ul").animate({left:distance},300);

	});
	$(".next").click(function(e){
		e.preventDefault();
		if(count < 2){
			count++;
		}
		else{
			return;
		}
		distance=count*247*(-1);
		$(".banner_zone ul").animate({left:distance},300);
	});

$(".keyvisual").mobileDragEvent2({total:5});







});
