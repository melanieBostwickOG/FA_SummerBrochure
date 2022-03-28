$(function(){

	var listval = $('#header')[0].offsetTop;   
	
	$(document).scroll(function() {     
	
		var topval = $(document).scrollTop();         
			if(topval >= listval){  
			   $('#header').addClass('fixed');  
			} else {  
			   $('#header').removeClass('fixed');  
			}  
		  
	});  
  
}); 