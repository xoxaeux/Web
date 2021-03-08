$(document).ready(function(){
	var idx = 7;
	while (idx <= 2) {
		var num = Math.floor(Math.random() * 45 + 1);
		var n = "num"+(nums.length)
		$('#num').text(num);
		$('#num').css('display','')
		idx--;
//		alert($('#n').text())
//		console.log($('#n').text())
		}
	f=setInterval(function(){
		var m = "num"+idx
		$('#num').css('display','');
		$('#num').css('float','left');
		idx++;
		if(idx==7){
			clearInterval(f);
		}
	}, 1000);
})
