$(function(){
	// 쿠키팝업
	$(".close").click(function(e){
		e.preventDefault();
		if($("input[name=todayClose]").is(":checked")){
			setCookie("close", "yes", 1);
		}
		$(".popup").removeClass("active");
	});

	if(GetCookie("close") == "yes"){
	}else{
		$(".popup").addClass("active");
	}

	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}else{
			var expires="";
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}







	// 네비게이션
	$("#gnb > ul > li").hover(
		function(e){
			e.preventDefault();
			// nav > ul.over{ height:200px;}
			$(".menu").addClass("over");
			$(this).addClass("active");
		},
		function(e){
			e.preventDefault();
			$(".menu").removeClass("over");;
			$("#gnb > ul > li").removeClass("active");
		}
	);

	$("#gnb > ul > li:first-child > a").focusin(function(){
		$(".menu").addClass("over");
	});
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb ul ul li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});
	$(".top_phototoon a").focusout(function(){
		$(".menu").removeClass("over");
	});
	$("#gnb li:last-child li:last-child").focusout(function(){
		$("#gnb > ul").removeClass("active");
	});







	// 갤러리 클릭시 슬라이드
	var galleryNum=5;
	var n=0;
	var pos;

	$(".controlls").find("li").eq(n).find("a").addClass("active");

	var gmove=setInterval(function(){
		loopGallery();
	}, 5000);
	$(".controlls").hover(
		function(){
			clearInterval(gmove);
		},
		function(){
			gmove=setInterval(function(){
				loopGallery();
			}, 5000);
		}
	);
	function loopGallery(){
		n++;
		pos=n*-1*100+"%";

		$(".keyvisual_inner").animate({left:pos}, 500, function(){
			if(n == 5){
					n=0;
					pos=0;
					$(".keyvisual_inner").css({"left":0});
			}
			$(".controlls").find("li").removeClass("active");
			$(".controlls").find("li").eq(n).addClass("active");
		});
	}


	$(".controlls").find("a").click(function(e){
		e.preventDefault();
		$(".controlls").find("li").removeClass("active");
		$(this).parent().addClass("active");

		n=$(this).parent().index();
		pos=n*-1*100+"%";
		$(".keyvisual_inner").animate({left:pos}, 500);
	});







// 팔도 오시는 길 선택
var n3;
var listName;

$("div[class^=paldo_sel] dt a").click(function(e){
	e.preventDefault();
	if($(this).parent().next("dd").is(":visible") == false) {
		$("div[class^=paldo_sel] dd").slideUp(300);
		$(this).parent().next("dd").slideDown(300);
		$(this).addClass("active");
	}
	else {
		$(this).parent().next("dd").slideUp(300);
		$(this).removeClass("active");
	}
});

$("div[class^=paldo_sel] dd a").click(function(e){
	e.preventDefault();
	$("div[class^=paldo_sel] dd a").removeClass("active");
	$(this).children("a").addClass("active");

	$("div[class^=paldo_sel] dd").slideUp(300);
	$("div[class^=paldo_sel] dt a").removeClass("active");

	listName=$(this).text();
	$(this).parents("div[class^=paldo_sel]").find("dt a").html(listName+ "<span></span>");
});






// 이벤트 컨트롤바 클릭시 배너이동.
	var m=0;
	var distance=0;
	var c=0;

	var id=setInterval(function(){
		eventMoving();
	}, 5000);

	$(".event_controlls li").click(function(e){
		e.preventDefault();
		c=$(this).index();
		distance=-1*c*368;

		$(".event_banner ul").animate({"left":distance}, 500);
		$(".event_controlls").find("li").removeClass("active");
		$(this).addClass("active");
	});

	$(".event_controlls li").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(function(){
				eventMoving();
			}, 5000);
		}
	);

	function eventMoving(){
		m++;
		// m=$(this).index();
		distance=-1*m*368;

		$(".event_banner ul").animate({"left":distance}, 500, function(){
			if(m==3){
				m=0;
				distance=0;
				$(".event_banner ul").css({"left":0});
			}
			$(".event_controlls").find("li").removeClass("active");
			$(".event_controlls").find("li").eq(m).removeClass("active");
			$(".event_controlls li").eq(m).addClass("active");
		});
	}

	// footer SNS 로고 이동
	var w=180;
	var amount=0;

	$(".prev").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		rightMoving();
	});

	function leftMoving(){
		amount-=w;
		$(".footer_site_logo ul").animate({left:amount}, 500, function(){
			$(this).append($(".footer_site_logo ul li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	}
	function rightMoving(){
		$(".footer_site_logo ul").prepend($(".footer_site_logo ul li:last-child"));
		amount-=w;
		$(".footer_site_logo ul").css({left:amount});
		amount+=w;
		$(".footer_site_logo ul").animate({left:amount}, 500);
	}



});
