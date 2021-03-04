window.onload = function() {
	var nums = [];
	while (nums.length <= 5) {
		var num = Math.floor(Math.random() * 45 + 1);
		nums.push(num);
		numBall = document.getElementById("num"+(nums.length));
		numBall.innerText = num;
		numBall.style.display='none';
	}
	idx = 1;
	f= setInterval(function(){
		numBall = document.getElementById("num" + idx);
		numBall.style.display='block';
		numBall.style.float='left';
		idx++;
		if(idx==7){
			clearInterval(f);
		}
	}, 1000);
}
