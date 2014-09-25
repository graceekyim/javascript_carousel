var Carousel = {
	init: function(){
		this.displayPhotos();
	},

	displayPhotos: function() {
		$.get("https://t23-pics.herokuapp.com/pics", function(data){
			var imageIds = data.image_ids;
			$.each(imageIds, function(index, value){
				hyperlink = 'https://t23-pics.herokuapp.com/pics/' + value;
				$.ajax({
					url: hyperlink,
					// async: false 
					/* 
					commented out to improve user experience by decreasing page load time
					photos may display out of order due to asynchronous request 
					*/
				}).done(function(data){
					$("ul.photos").append("<li><img src=" + data.url + " /></li>");
				});
			});
		});
	},
};


$(function(){
	Carousel.init();

	$(".carousel-buttons").on("click", "#prev", function(event){
		event.preventDefault();
		var lastChild = $("li").last();
		$(".photos").prepend(lastChild);
		lastChild.animate({left: '94px'});
	});

	$(".container").on("click", "#next", function(event){
		event.preventDefault();
		var firstChild = $("li").first();
		firstChild.animate({left: '-94px'});
		$(".photos").append(firstChild);
	});
});

