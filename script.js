	
	window.onload = function() {
		var auntie_dot=$("#auntie_dot");
		
		var r=$("#rect_template"),
			height = r.fullHeight(),
			width  = r.fullWidth();
			
		var body = $("body"),
			viewport_height = $(window).height();
			viewport_width  = body.fullWidth();
			
		auntie_dot.height(viewport_height)
				  .width(viewport_width);
		
		var num_cols=Math.floor(viewport_width/width);
		var num_rows=Math.floor(viewport_height/height);
		auntie_dot.html("")
		for(var i=num_rows;i>0;i--) {
			var row="";
			row+="<div class='row'>";
			for (var n=num_cols;n>0;n--) {
				if (Math.random()<0.2 && n>10 && n<22 ) {
					row += "<div class='highlight rect'><span class=beam></span></div>";
				} else {
					row += "<div class=rect></div>";
				}
			};
			row += "</div>";
			var $row = $(row);
			auntie_dot.append($row)
		}	
		
		
		auntie_dot.delegate(".rect","click",function() {
			$(this).toggleClass("highlight");
			$(this).append("<span class='beam'></span>");
		})
		setInterval(function() {
			flipBeams();
		},9000);
		
		auntie_dot.click(function() {
			$(this).toggleClass("changed");
		});		
	}
	
	function flipBeams() {
		var is_flipped = $(".flipped").length > 0;
		var rows=$("#auntie_dot .row");
		var num_cols=rows.eq(0).children().length;
		
		for (var i=num_cols;i>0;i--) {
			setTimeout(function(i) {
				if (is_flipped) i = num_cols-i;
				rows.children(":nth-child("+i+")").find(".beam").toggleClass("flipped");
			},100*(num_cols-i),i);
		}
	}
	
$.fn.fullWidth = function() {
	var el=$(this);
	return parseInt( el.outerWidth() ) + 
		   parseInt( el.css("marginLeft") ) +
		   parseInt( el.css("marginRight") );
};
$.fn.fullHeight = function() {
	var el=$(this);
	return parseInt( el.outerHeight() ) + 
		   parseInt( el.css("marginTop") ) +
		   parseInt( el.css("marginBottom") );
};

