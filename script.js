$(document).ready(function(){
   	var $flyOvr = $(".hiLight");
	var $selected = $(".topButton");
	
	$flyOvr.ready(function() {
		$flyOvr.fadeTo('3000',1);
		});
	
	$flyOvr.stop().mouseover(function(){
		$(this).stop(true,true);
		$(this).fadeTo('500', 0.5);
		});	

	$flyOvr.mouseleave(function(){
		$(this).stop(true,true);
		$(this).fadeTo('500', 1);
		});
	
	$selected.click(function() {
		$(this).toggleClass("selected");
		});

});
