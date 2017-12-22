(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$('.testimonial-carousel').owlCarousel({
    	    loop:true,
    	    margin:10,
    	    dots:true,
    	    smartSpeed:1500,
    	    autoplay:true,
    	    nav:true,
    	    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    	    responsive:{
    	        0:{
    	            items:1
    	        },
    	        600:{
    	            items:1
    	        },
    	        1000:{
    	            items:1
    	        }
    	    }
    	})
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));