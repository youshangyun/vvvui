if(vvMobile){
	$(document.body).append('<div class="backBtn"><div class="backIcon"></div></div>');
	$(".vvMenu").hide();
	$("#tipTitle").hide();
}else{
	$(".vvScene").append('<div class="backBtn"><div class="backIcon"></div></div>');
	$(".backBtn").vvAnimate({
		right : -40,
		top   : -40
	});
}
$(".backBtn").bindTouch(function(){
	location.href = '../../';
});