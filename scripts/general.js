$(document).ready(function(){
	$("a.mobile").click(function(){
		$(".sidebar").sideToggle('fast');
	});
	
	window.onresize = function(event){
		if($(window).width() > 320){
			$(".sidebar").show();
		}
	};
});