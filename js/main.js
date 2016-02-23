(function  ($) {
	var data = {
		 "tl":
		{
			0: 'purple',
			1: 'blue',
			2: 'yellow',
			3: 'green'

		},"tr" : 
		{
			0: 'blue',
			1: 'yellow',
			2: 'green',
			3: 'purple'
		},"br" :
		{
			0: 'yellow',
			1: 'green',
			2: 'purple',
			3: 'blue'
		},"bl" :
		{
			0: 'green',
			1: 'purple',
			2: 'blue',
			3: 'yellow'
		}
	};
	
console.log(data);
$('#canvas img.users').each(function () {
	
	$(this).click(function (e) {
		e.preventDefault();
		// console.log('done');
		var id =$(this).attr("id");
		// var i = 0;
		// while(i<4){
			
		// 	var arrow = "#"+data[id][i];
	
		// 	$(arrow).hide(700);
		// 	console.log(arrow);

		//  i++;
			
		// }
		// 
		var counter = 0;
			var i = setInterval(function(){
			    // do your thing
			    	var arrow = "#"+data[id][counter];
	
					$(arrow).animate({
						opacity: 0.25,

					}, 500, function () {
						$(this).css('opacity', '1');
					});
					// console.log(i);
			    counter++;
			    if(counter === 4) {
			        clearInterval(i);
			    }
			}, 200);	
		});
	
});

})(jQuery);
