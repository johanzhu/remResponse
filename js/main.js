$('#fullpage').fullpage({
	sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF','#FFF'],
    verticalCentered: false,
    resize: true,
    afterLoad:function(link,index){
  	switch(index){
  		case 1:
  		$('#page1-tx-1').delay(1000).animate({'margin-left':'0.33rem'},1000);
  		$('#page1-tx-2').delay(2500).animate({'opacity':'1'},1000);
  		break;
  		case 2:
  		$('#page2-pic-1').animate({'padding-top':'10%'},1000);
  		$("#page2-pic-2").animate({'padding-top':'30%'},1000); 
  		break;
  		case 3:
  		$('.page3-item').eq(0).animate({'margin-top':'0','opacity':'1'},1000);
  		$('.page3-item').eq(1).delay(100).animate({'margin-top':'0','opacity':'1'},1000);
  		$('.page3-item').eq(2).delay(200).animate({'margin-top':'0','opacity':'1'},1000);
  		break;
  		case 4:
  		$('#content4').animate({'width':'98%'},1000);
  		$('#content4').css({'margin-top':'-89px'});
  		break;
  		case 5:
  		$('#page5-pic').animate({'width':'50%'},1000);
  		break;
  		default:
  		break;
  	}
  }
});
/*响应式居中*/
window.onload = function(){
var h = $(".page3-item").css("height");
var H = parseInt(h);
var h2 = $('#content3').css("margin-top");
$('#content3').css({"margin-top": -0.5*H + 'px'});
var H2 = parseInt($("#content4").css("height"));
$('#content4').css({"margin-top": -0.5*H2 + 'px'});
var H3 = parseInt($("#content5").css("height"));
$('#content5').css({"margin-top": -0.5*H3 + 'px'});
}
window.onresize = function(){
var h = $(".page3-item").css("height");
var H = parseInt(h);
var h2 = $('#content3').css("margin-top");
$('#content3').css({"margin-top": -0.5*H + 'px'});
var H2 = parseInt($("#content4").css("height"));
$('#content4').css({"margin-top": -0.5*H2 + 'px'});
var H3 = parseInt($("#content5").css("height"));
$('#content5').css({"margin-top": -0.5*H3 + 'px'});
}
