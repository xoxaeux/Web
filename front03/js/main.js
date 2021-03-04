window.onload = function() {
	var nums = [];
	while (nums.length <= 5) {
		var num = Math.floor(Math.random() * 45 + 1);
		nums.push(num);
	}
//	nums.forEach(function(item) {
//		console.log(item);
//	});
	 setInterval(showNum, 1000);
}

function showNum(){
	var numBall = document.getElementsByClassName("nums");
}

