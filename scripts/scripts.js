//Parallax
var $window = $(window); 
var velocity = 0.6; 
var xwingvelocity = 0.05;
var xwinggrow = 0.3;
function update(){ 
	var pos = $window.scrollTop(); 
	$('.container').each(function() { 
		var $element = $(this); 
		var height = $element.height(); 
		var width = $element.width();
		
		$(this).css('backgroundPosition', '50%' + Math.round((height - pos) * velocity) + 'px');
		$('#stars').css('backgroundPosition', '50%' + Math.round((height - pos) * velocity) + 'px');
		$('.xwing').css('top', Math.round((width + pos) * xwingvelocity) + 'px');
		$('.xwing').css('right', Math.round((width + pos) * xwinggrow) + 'px');
		$('.xwing').css('height', Math.round((height + pos) * xwinggrow) + 'px'); 
	}); 
}; 
$window.bind('scroll', update); 
$(document).ready(function() {
    $("#tabs").tabs();
    $(".image-code").colorbox();
	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
});
