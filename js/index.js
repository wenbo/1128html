$(document).ready(function(){
	$(".mengban,.content").hide();
	$(".col-md-4").mouseover(function(){
		$(this).find(".Ximg").attr("src","images/Xp.gif");
		$(this).find(".backimg,.text").hide();
		$(this).find(".mengban").show();
        $(this).find(".content").css("display","block");
	});
	$(".col-md-4").mouseout(function(){
		$(this).find(".Ximg").attr("src","images/X.gif");
		$(this).find(".backimg,.text").show();
		$(this).find(".mengban").hide();
        $(this).find(".content").css("display","none");
	});

	$(".Ximgl").mouseover(function(){
		$(this).attr("src","images/Xp.gif");
	});

	$(".Ximgl").mouseout(function(){
		$(this).attr("src","images/X.gif");
	});


	$(".read a").mouseover(function(){
		$(this).css("color","#008aff");
	});

	$(".read a").mouseout(function(){
		$(this).css("color","#000");
	});

    if($(window).height() > $("#wrapper").height()){
	    	$("#wrapper").css("margin","auto");
	    }
	    else{
	    	$("#wrapper").css("margin","0 auto");
	    }

   $(window).resize(function() {
	    if($(window).height() > $("#wrapper").height()){
	    	$("#wrapper").css("margin","auto");
	    }
	    else{
	    	$("#wrapper").css("margin","0 auto");
	    }
  });
});


