$('#fullpage').fullpage({
	sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF','#FFF'],
    verticalCentered: false,
    resize: true
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
