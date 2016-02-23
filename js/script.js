(function  ($) {
	var data = {
		 "a":
		{
			"purple": {
				0:'left_down_purple'
			},
			"purple1": {
				1: 'left_up_purple'
			},
			"green": {
				2: 'right_down_purple'
			},
			"blue1": {
				3: 'right_up_purple'
			}

		},"b" : 
		{
			"blue" :{
				0: 'green_bottom_arrow'
			},
			"mermno":{
				1: 'green_top_arrow'
			},
			"mnomer" : {
				2: 'right_down_green'
			},
			"yellow1": {
				3: 'right_up_green'
			},
			"blue1": {
				4: 'left_down_green'
			},
			"purple1":{
				5: 'right_up_green'
			}
		},"c" :
		{
			"yellow": {
				0: 'down_right_red'
			},
			"green":{
				1: 'down_left_red'
			},
			"blue1": {
				2: 'up_right_red'
			},
			"purple":{
				3: 'down_right_red'
			}
		},"d" :
		{
			"bankmno":{
				0: "blue_forward_arrow"
			},
			"mnobank":{
				1: 'blue_back_arrow'
			},
			"green": {
				2: 'blue_arrow_down_active'
			},
			"purple": {
				3: 'blue_arrow_up_active'
			}
		}
	};
	
// console.log(data);
$('#key a').each(function () {
	$(this).click(function (e) {
		$("#canvas img.arrows").fadeOut(700);
		e.preventDefault();
		var id =$(this).attr("id");
		// console.log(id);
		var key0, key1, key2, key3, key4, key5 = 'undefined';
		var key0 = $(this).attr("data-key0");
		var key1 = $(this).attr('data-key1');
		var key2 = $(this).attr('data-key2');
		var key3 = $(this).attr('data-key3');
		var key4 = $(this).attr('data-key4');
		var key5 = $(this).attr('data-key5');

		// while(i<4){
		var i = 0;
			// var arrow = "#"+data[id][key][i];
	
		// 	$(arrow).hide(700);
			// console.log(data[id][key2][1]);
			var first = setTimeout(function () {
				$("#"+key0).fadeOut().attr('src', "img/arrows/"+data[id][key0][0]+".png").fadeIn();
				// console.log(p);
				$("."+id+"1").fadeIn(1500).fadeOut(500);
			}, 2000);
			// clearTimeout();
			var second = setTimeout(function () {
				clearTimeout(first);
				$("#"+key1).fadeOut().attr('src', "img/arrows/"+data[id][key1][1]+".png").fadeIn();
				$("."+id+"2").fadeIn(1500).fadeOut(500);
			}, 4000);
			var third = setTimeout(function () {
				clearTimeout(second);
				$("#"+key2).fadeOut().attr('src', "img/arrows/"+data[id][key2][2]+".png").fadeIn();	
				$("."+id+"3").fadeIn(1500).fadeOut(500);
			}, 6000);
			var fourth = setTimeout(function () {
				clearTimeout(third);
				$("#"+key3).fadeOut().attr('src', "img/arrows/"+data[id][key3][3]+".png").fadeIn();
				$("."+id+"4").fadeIn(1500).fadeOut(500);
			}, 8000);
			if(key4 !== 'undefined'){
				var fifth = setTimeout(function () {
					clearTimeout(fourth);
					$("#"+key4).fadeOut().attr('src', "img/arrows/"+data[id][key4][4]+".png").fadeIn().show();
					$("."+id+"5").fadeIn(1500).fadeOut(500);
				}, 10000);
			};
			if (key5 !== 'undefined') {
				var sixth = setTimeout(function () {
					clearTimeout(fifth);
					$("#"+key5).fadeOut().attr('src', "img/arrows/"+data[id][key5][5]+".png").fadeIn().show();
					$("."+id+"6").fadeIn(1500).fadeOut(500);
				}, 12000);
			};
			var last = setTimeout(function () {
				// clearTimeout(fourth);
				$("#canvas img.arrows").fadeIn(500);
				// clearTimeout(last);
			}, 14000);

		//  i++;
			
		// }
		// 
		/*var counter = 0;
		var thing = $(this);
		var i = setInterval(function(thing){
		    // do your thing
		    	
				console.log(this);
		    counter++;
		    if(counter === 4) {
		        clearInterval(i);
		    }
		}, 200);*/

		});
	
});

})(jQuery);
