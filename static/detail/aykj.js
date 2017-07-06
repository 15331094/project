//酷播迷你CuPlayerMiniV4.0/代码开始
	function videoPlayer(videoUrl,videoImg,videoW,videoH){	
		var so = new SWFObject("/front/flash/CuPlayerMiniV20_Black_S.swf", "CuPlayer", videoW, videoH, "9", "#000000");
	  so.addParam("allowfullscreen", "true");
	  so.addParam("allowscriptaccess", "always");
	  so.addParam("wmode", "opaque");
	  so.addParam("quality", "high");
	  so.addParam("salign", "lt");
	  so.addVariable("CuPlayerFile",videoUrl);
	  so.addVariable("CuPlayerShowImage", "false");
	  so.addVariable("CuPlayerImage",videoImg);//视频略缩图,本图片文件必须正
	  so.addVariable("CuPlayerWidth", videoW);
	  so.addVariable("CuPlayerHeight", videoH);
	  so.addVariable("CuPlayerAutoPlay", "false");
	  so.addVariable("CuPlayerAutoRepeat", "false");
	  so.addVariable("CuPlayerShowControl", "true");
	  so.addVariable("CuPlayerAutoHideControl", "false");
	  so.addVariable("CuPlayerAutoHideTime", "6");
	  so.addVariable("CuPlayerVolume", "80");
	  so.write("CuPlayer");	
	}
	function videoPlayer5(videoUrl,videoImg,videoW,videoH){	
		var so = new SWFObject("/front/flash/CuPlayerMiniV20_Black_S.swf", "CuPlayer5", videoW, videoH, "9", "#000000");
	  so.addParam("allowfullscreen", "true");
	  so.addParam("allowscriptaccess", "always");
	  so.addParam("wmode", "opaque");
	  so.addParam("quality", "high");
	  so.addParam("salign", "lt");
	  so.addVariable("CuPlayerFile",videoUrl);
	  so.addVariable("CuPlayerShowImage", "false");
	  so.addVariable("CuPlayerImage",videoImg);//视频略缩图,本图片文件必须正
	  so.addVariable("CuPlayerWidth", videoW);
	  so.addVariable("CuPlayerHeight", videoH);
	  so.addVariable("CuPlayerAutoPlay", "false");
	  so.addVariable("CuPlayerAutoRepeat", "false");
	  so.addVariable("CuPlayerShowControl", "true");
	  so.addVariable("CuPlayerAutoHideControl", "false");
	  so.addVariable("CuPlayerAutoHideTime", "6");
	  so.addVariable("CuPlayerVolume", "80");
	  so.write("CuPlayer5");	
	}
	function videoPlayer2(videoUrl,videoImg,videoW,videoH){	
	  var so = new SWFObject("/front/flash/CuPlayerMiniV20_Black_S.swf", "CuPlayer", videoW, videoH, "9", "#000000");
	  so.addParam("allowfullscreen", "true");
	  so.addParam("allowscriptaccess", "always");
	  so.addParam("wmode", "opaque");
	  so.addParam("quality", "high");
	  so.addParam("salign", "lt");
	  so.addVariable("CuPlayerFile",videoUrl);
	  so.addVariable("CuPlayerShowImage", "false");
	  so.addVariable("CuPlayerImage",videoImg);//视频略缩图,本图片文件必须正
	  so.addVariable("CuPlayerWidth", videoW);
	  so.addVariable("CuPlayerHeight", videoH);
	  so.addVariable("CuPlayerAutoPlay", "false");
	  so.addVariable("CuPlayerAutoRepeat", "false");
	  so.addVariable("CuPlayerShowControl", "true");
	  so.addVariable("CuPlayerAutoHideControl", "false");
	  so.addVariable("CuPlayerAutoHideTime", "6");
	  so.addVariable("CuPlayerVolume", "80");
	  so.write("CuPlayer1");		
	}
	function clickPlayer(videoDiv,videoW,videoH){
		$(videoDiv).find("dd").click(function(){
			var videoUrl=$(this).attr("rel")
			var videoImg=$(this).attr("role")
			/*var link=$(this).attr("val");//当前视频详细页链接
			if(link && window._bd_share_config){//分享时的地址改为：对应视频详细页的地址
				alert(window._bd_share_config.common.bdUrl);
				window._bd_share_config.common.bdUrl = "http://www.ynzhonghao.com/news/1421905556103.html" + "/news/1421905556103.html";
				//window._bd_share_config.common.bdUrl = window.location.host + link;
				alert(window._bd_share_config.common.bdUrl);
			}*/
			videoPlayer(videoUrl,videoImg,videoW,videoH)
		})
	}
//酷播迷你CuPlayerMiniV4.0/代码结束

$(document).ready(function() {
/**
 * tabs
 * @return
 */
function tabs(tabTitle,tab_content,event){
		var index=$(tabTitle).children(".hover").index()
		$(tab_content).children().eq(index).show().siblings().hide();
		
		$(tabTitle).children().bind(event,function(){
			var index=$(this).index();
		  	$(this).addClass("hover").siblings().removeClass("hover"); 
			$(tab_content).children().eq(index).show().siblings().hide();
			return false;
		});
}
$(function(){
	//tabs(".text_type","#tab_conbox","hover");
	tabs(".indexContent1LTitleTab",".indexContent2Box","hover");
	tabs(".indexContent1RTitleTab",".indexContentR2Box","hover");
	tabs(".indexContent3Title",".indexContent3PicBox","hover");
	tabs(".singleArticle2TabTitleList",".singleArticle2ContentBox","hover");
	tabs(".singleArticle2ContentL","#singleArticle2ContentRBox1","hover");
	tabs(".singleArticle2ContentL","#singleArticle2ContentRBox2","hover");
	tabs(".singleArticle2ContentL","#singleArticle2ContentRBox3","hover");
	tabs(".singleArticle2ContentL","#singleArticle2ContentRBox4","hover");
})

/*
 *字体大小
*/
$(function(){
	var fontSize=$(".acticleTime span")
	var articleBox=$(".articleBox")
	fontSize.click(function(){
		$(this).addClass("hover").siblings().removeClass("hover")
		var fontHtml=$(this).html();
		if(fontHtml=="小")
		{
			articleBox.css({"font-size":"12px"})
		}
		else if((fontHtml=="中"))
		{
			articleBox.css({"font-size":"14px"})
		}
		else if((fontHtml=="大"))
		{
			articleBox.css({"font-size":"18px"})
		}
	})
})
/*menu首页没有背景*/
$(".menuList dd:first p a").css({background:"none",padding:"0"})
$(".subMenu").each(function(index, element) {
    $(this).find("li:last").css("background","none")
});

/*subMenu下拉效果*/
var menudd=$(".menuList dd")
menudd.each(function(index, element) {
    $(this).hover(function(){
		$(this).find(".subMenu").stop(true,true).slideDown()
	},function(){
		$(this).find(".subMenu").stop(true,true).slideUp()
		})
});

/*文字滚动**图片滚动*/
$(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true});
$("#picScroll-left1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:6});
$("#picScroll-left2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:6});
$("#picScroll-left3").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:6});
$(".focus").slide({titCell: ".hd ul",
		mainCell: ".bd_dl",
		autoPlay:true,      //自动播放
		effect:"fold",  //左循环滚动  fold：淡入淡出 topLoop：上循环滚动； leftLoop：左循环滚动；
		delayTime: 2000,    //切换时间
		interTime: 5000,    //切换间隔
		autoPlay: true,     //自动播放
		trigger: "click",
		prevCell: ".prev",
		nextCell: ".next",
	});
/*首页图片滚动hover效果*/
var picScrollli=$(".picScroll-left .bd_dl li")
picScrollli.each(function(index, element) {
    $(this).hover(function(){
		$(this).find(".picScroll-leftText").fadeIn()
		},function(){
			$(this).find(".picScroll-leftText").fadeOut()
			})
});
/*左侧包含下拉菜单年份选择*/
var yeardiv=$(".year div")
	yeardiv.hover(function(){
		$(this).find(".yearsList").stop(true,true).slideDown()
		var yeardd=$(".yearsList dd")
		yeardd.click(function(){
			var ddtext=$(this).find("a").text()
			$(this).parent().siblings("h1").text(ddtext)
			$(this).parent().stop(true,true).slideUp()
			searchByKeyword();
			})
		},function(){
			$(this).find(".yearsList").stop(true,true).slideUp()
			})
	//视频列表效果
	var videodd=$(".videoList dd")
	videodd.click(function(){
		$(".videoPlayBox").css("display","block")
	})
	$(".videoClose").click(function(){
		$(".videoPlayBox").css("display","none")
	});
	videodd.each(function(index, element) {
		$(this).hover(function(){
			$(this).find(".videoListBar").css("display","none")
			$(this).find(".videoListHover").fadeIn()
			},function(){
			$(this).find(".videoListBar").css("display","block")
			$(this).find(".videoListHover").fadeOut()
				});
	});
	
	
/*职位信息页面横线及展开收缩效果*/
var recruitment2Listi=$(".recruitment2List dd i")
recruitment2Listi.each(function(index, element) {
	var recruitment2Listspanwidth=$(this).siblings("span").width()
 $(this).width(635-recruitment2Listspanwidth-76-10-10)   
});
/*展开收缩*/
$(".ddp").each(function(index, element) {
        $(this).toggle(
			function(){
				$(this).parents("dd").next("dt").css({display:"block"})
				$(this).find("a").text("-")
				},
			function(){
				$(this).parents("dd").next("dt").css({display:"none"})
				$(this).find("a").text("+")
				}
		)
});

/*大事记判断more的显示隐藏*/
/*var thingddtext=$(".developBox dd .developLContent")
thingddtext.each(function() {	
   var a = $(this).height()
    $(this).height(a)
	if(a==120){
		$(this).next(".developMore").css("display","block")
		}
		else{
			$(this).next(".developMore").css("display","none")
			}
});*/
/*首页顶部子公司下拉菜单效果*/
var companyNow=$(".topUpRL p a")
$(".topUpRL").hover(function(){
	$(this).find("p").addClass("hover")
	$(this).find(".topUpRLList").stop(true,true).slideDown()
	/*var companylistlia=$(".topUpRLList li a")
	companylistlia.each(function() {
		var companylistliText=$(this).text()
        $(this).click(function(){
		$(this).parents(".topUpRLList").siblings().children().text(companylistliText)
		$(this).parents(".topUpRLList").stop(true,true).slideUp()
		})
    });*/
	
	},function(){
		$(this).find("p").removeClass("hover")
		$(this).find(".topUpRLList").stop(true,true).slideUp()
})


});


function turnToenglishMonth(){
	$(".englishMonth").each(function(n){
		var month = $(this).html().trim();
		if(month){
			var monthInt = parseInt(month);
			if(monthInt == 1){
				month = "January";
			}else if(monthInt == 2){
				month = "February";
			}else if(monthInt == 3){
				month = "March";
			}
			else if(monthInt == 4){
				month = "April";
			}
			else if(monthInt == 5){
				month = "May";
			}
			else if(monthInt == 6){
				month = "June";
			}
			else if(monthInt == 7){
				month = "July";
			}
			else if(monthInt == 8){
				month = "Aguest";
			}
			else if(monthInt == 9){
				month = "September";
			}
			else if(monthInt == 10){
				month = "October";
			}
			else if(monthInt == 11){
				month = "November";
			}
			else if(monthInt == 12){
				month = "December";
			}
			$(this).html(month);
		}
	});
}

function turnToenglishMonth2(){
	$(".englishMonth").each(function(n){
		var month = $(this).html().trim();
		if(month){
			var monthInt = parseInt(month);
			if(monthInt == 1){
				month = "Jan";
			}else if(monthInt == 2){
				month = "Feb";
			}else if(monthInt == 3){
				month = "Mar";
			}
			else if(monthInt == 4){
				month = "Apr";
			}
			else if(monthInt == 5){
				month = "May";
			}
			else if(monthInt == 6){
				month = "Jun";
			}
			else if(monthInt == 7){
				month = "Jul";
			}
			else if(monthInt == 8){
				month = "Aug";
			}
			else if(monthInt == 9){
				month = "Sep";
			}
			else if(monthInt == 10){
				month = "Oct";
			}
			else if(monthInt == 11){
				month = "Nov";
			}
			else if(monthInt == 12){
				month = "Dec";
			}
			$(this).html(month);
		}
	});
}

function addHits(obj,url) {
		try {
				$.ajax({
					type:'POST',
					dataType:'text',
					url:'/index!addHits.xhtml',
					data:'url='+url+'',
					success:function(data){
						if("success" == data){
							var em =  $(obj).find("em");
							var count = parseInt(em.html()) + 1;
							em.html(count);
						}
					}
				});
		}catch(e){
			return false;
		}
	}

	
	
function encodeByValueFront(value) {
	try {
		return encodeURI(encodeURI(value));
	}catch(e){}
}

function encodeByJQueryFront(value) {
	try {
		var value = $(value);
		return encodeURI(encodeURI(value.val()));
	}catch(e){}
}
