var carousel = {
	config: {
		wrapper: 'ul.photos',
		urlBase: 'https://t23-pics.herokuapp.com/pics/',
	},

	init: function(){
		carousel.displayPhotos();
	},

	displayPhotos: function() {
		var urls = carousel.getIds();
		$.each(urls, function(index, value){
			carousel.getUrls(value);
		});
	},

	getIds: function() {
		var ids;
		$.ajax({
			url: 'https://t23-pics.herokuapp.com/pics',
			async: false,
			success: function(data) {
				ids = data.image_ids;
			}
		});
		return ids;
	},

	getUrls: function(value) {
		var hyperlink = carousel.config.urlBase + value;
		// photos may display out of order due to asynchronous request
		// 'async: false' would increase page load time and affect UX
		$.get(hyperlink, function(data){
			$(carousel.config.wrapper).append('<li><img src=' + data.url + ' /></li>');
		});
	},
};

$(function(){
	carousel.init();
	scrollFeature.init();
});

