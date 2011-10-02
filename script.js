	
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
		
		var html="";
		
		for(var i=num_rows;i>0;i--) {
			var _3d_direction = i;
			html+="<div class='row r"+_3d_direction+"'>";
			for (var n=num_cols;n>0;n--) {
				if (Math.random()<0.2 && n>10 && n<22 ) {
					html+="<div class='highlight rect'><span class=beam></span></div>";
				} else {
					html+="<div class=rect></div>";
				}
			};
			html+="</div>";
		}	
		auntie_dot.html(html)
		
		auntie_dot.delegate(".rect","click",function() {
			$(this).toggleClass("highlight");
			$(this).append("<span class='beam'></span>");
		})
		setTimeout(function() {
			auntie_dot.addClass("start");
		},1000);
		
		auntie_dot.click(function() {
			$(this).toggleClass("changed");
		});		
	}
	
	function flipBeams() {
		var rows=$("#auntie_dot .row");
		var num_cols=rows.eq(0).children().length;
		
		for (var i=num_cols;i>0;i--) {
			setTimeout(function(i) {
				rows.children(":nth-child("+i+")").find(".beam").toggleClass("flipped");
			},150*(num_cols-i),i);
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

