$ (document).ready(function() {

	$(".thumbnail").hover(function () {
		var baseName = $(this).find("img").data('name');
		$(this).find("img").attr("src", "images/"+baseName+".jpg");
		$(this).find(".quote").attr("class", "quote");

	}, function () {
		var baseName = $(this).find("img").data('name');
		$(this).find("img").attr("src", "images/"+baseName+ "bw.jpg");
		$(this).find(".quote").attr("class", "quote white-text");

	});
});



/*$(document).ready(function () {
   $(".poster").hover(function () {
   	   var baseName = $(this).data('name');
       $(this).find("img").attr("src", baseName+"-color.jpg");
       $(this).find(".quote").attr("class", "quote");;
   }, function () {
       var baseName = $(this).data('name');
       $(this).find("img").attr("src", baseName+"-bw.jpg");
       $(this).find(".quote").attr("class", "quote white-text");
   });
});*/