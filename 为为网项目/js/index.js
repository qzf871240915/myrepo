$(function(){
	$("#attention").hover(
		function(){
			$("#index-a-child").css("display","block")
		},function(){
			$("#index-a-child").css("display","none")
		}
	)
})
$(function(){
	$("#search-nav li").on("click",function(){	
		$("#search-nav li").removeClass("current");
		$(this).addClass("current");
	});
});

$(function(){
	$("#scan").hover(
		function(){
			$("#right-er").css("display","block")
		},function(){
			$("#right-er").css("display","none")
		}
	)
})


$(function(){
		$("#nav-nav li").hover(
			function(){
				$(this).addClass("current");
				$(this).children().css("display","block");
			},function(){
				$("#nav-nav li").removeClass("current")
				$("#nav-nav li").children().css("display","none");
				$("#nav-nav li").eq(0).addClass("current")
			}
		)
});
$(function(){
	var index=0;
	var isplay=true;
	function move(){
		index++;
		if(index>=$("#banner-left img").size()){
			index=0;
		}
		$("#banner-left img").eq(index).fadeIn(500).siblings(".banner-img").fadeOut(500);
		$(".banner-lefta").eq(index).css("background","#fea500").siblings().css("background","#eee");
		isplay=true;
	}
	var time=setInterval(function(){
			move();
	},2000)
	$("#banner-left").hover(
		function(){
			clearInterval(time);
			$("#banner-left p").css({"display":"block"});
		},function(){
			$("#banner-left p").css({"display":"none"});
			time=setInterval(function(){
				move();
			},2000)
		}
	)
	$(".banner-lefta").on("click",function(){
		index=$(this).index()-1;
		move();
	})
	
	$("#banner-left-prev").on("click",function(){
		if(isplay==true){
			isplay=false;
			index=index-2;
			if(index<-1){
				index=$("#banner-left img").size()-2;
			}
			move();
		}
	})
	$("#banner-left-next").on("click",function(){
		if(isplay==true){
			isplay=false;
			move();
		}
	})
	$("#banner-right").hover(
		function(){
			$("#banner-right p").css({"display":"block"});
		},function(){
			$("#banner-right p").css({"display":"none"});
		}
	);
	$("#banner-right-prev").hover(
		function(){
			$("#banner-right-prev").css('opacity',.5)
		},function(){
			$("#banner-right-prev").css('opacity',.2)
		}
	);
	$("#banner-right-next").hover(
		function(){
			$("#banner-right-next").css('opacity',.5)
		},function(){
			$("#banner-right-next").css('opacity',.2)
		}
	);
});



$(function(){
	$("#tit-right .titr").hover(
		function(){
			var index=$(this).index();
			$(this).addClass("titrcurr").siblings().removeClass("titrcurr")
			$("#main1-con-right .im1cr1").eq(index).removeClass("none").siblings().addClass("none")
		}
	)
})


$(function(){
	$(".im4tna").hover(
		function(){
			var curr=$(this).index();
			if(curr!=0){
				$(".im4tna").eq(curr).addClass("im3amore").siblings(".im4tna").removeClass("im3acurr").removeClass("im3amore");
			}else{
				$(".im4tna").eq(curr).addClass("im3acurr").siblings(".im4tna").removeClass("im3amore");
			}
			$(".im3cl-box").eq(curr).removeClass("none").siblings(".im3cl-box").addClass("none");
		},function(){
		}
	)
})

$(function(){
	var index=0;
	var timer=setInterval(function(){
		move();
	},1000)
	$("#im4cl").hover(
		function(){
			clearInterval(timer);
			$("#im4cl p").css("display","block");
		},function(){
			$("#im4cl p").css("display","none");
				timer=setInterval(function(){
				move();
			},1000)
		}
	)
	$(".im4cl-list").click(function(){
		index=$(this).index();
		setpos();
	})
	$("#im4cl-prev").on("click",function(){
		left();
	})
	$("#im4cl-next").on("click",function(){
		move();
	})
	$("#im4cl-prev").hover(
		function(){
			$("#im4cl-prev").css('opacity',.7)
		},function(){
			$("#im4cl-prev").css('opacity',.2)
		}
	);
	$("#im4cl-next").hover(
		function(){
			$("#im4cl-next").css('opacity',.7)
		},function(){
			$("#im4cl-next").css('opacity',.2)
		}
	);
	function left(){
		index--;
		if(index<0){
			index=$(".im4cla").size()-1;
		}
		setpos();
		
	}
	function move(){
		index++;
		if(index>$(".im4cla").size()-1){
			index=0;
		}
		setpos();
	}
	function setpos(){
		$("#im4cla-box").stop(true,false).animate({left:-index*590},500);
		$(".im4cl-list").eq(index).addClass("im4cl-color").siblings(".im4cl-list").removeClass("im4cl-color")
	}
})


$(function(){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var height=$(window).height();
		if(top>height){
			$("#gototop").css('display','block')
		}else{
			$("#gototop").css('display','none')
		}
	})
})
