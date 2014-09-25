var scrollFeature = {
	config : {
		wrapper: '.carousel-buttons',
		container: '.photos'
	},

	init: function() {
		$(scrollFeature.config.wrapper).on("click", function(event){
			event.preventDefault();
			switch (event.target.id) {
				case 'next':
					scrollFeature.nextPhoto();
					break;
				case 'prev':
					scrollFeature.prevPhoto();
					break;
			}
		});
	},

	nextPhoto: function() {
		var firstChild = $("li").first();
		firstChild.animate({left: '-94px'});
		$(scrollFeature.config.container).append(firstChild);		
	},

	prevPhoto: function() {
		var lastChild = $("li").last();
		$(scrollFeature.config.container).prepend(lastChild);
		lastChild.animate({left: '94px'});
	},
};