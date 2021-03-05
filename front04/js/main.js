window.onload = function() {
//	part 1.
	var elements = document.getElementsByTagName("div");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className == "store_item_sub") {
			elements[i].style.display = "none";
		} else if (elements[i].className == "store_area") {
			elements[i].onclick = switchDisplay;
		} else if (elements[i].className == "store_display") {
			elements[i].onclick = switchDisplay2;
		}
	}

	function switchDisplay() {
		var parent = this.parentNode;
		var target = parent.getElementsByTagName("div")[1];
		if (target.style.display == "none") {
			target.style.display = "block";
		} else {
			target.style.display = "none";
		}
		return false;
	}
	function switchDisplay2() {
		var elements = document.getElementsByTagName("div");
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].className == "store_item_sub") {
				if (elements[i].style.display == "none") {
					elements[i].style.display = "block";
				} else {
					elements[i].style.display = "none";
				}
			} else if (elements[i].className == "store_display") {
				if (elements[i].style.display == "none") {
					elements[i].style.display = "block";
				} else {
					elements[i].style.display = "none";
				}
			}
		}
		return false;
	}
	
//	part2.
	var noimg = document.getElementById("noimg");
	noimg.style.display = 'block';
	noimg.style.margin = '0 auto';
	var profileimg = document.getElementById("profileimg");
	profileimg.style.display = 'none';
	var nav_link_1 = document.getElementsByClassName("nav_link_1");
	for(var i=0;i<nav_link_1.length;i++){
		nav_link_1[i].style.display='block';
		nav_link_1[i].style.float='right';
	}
	var nav_link_2 = document.getElementsByClassName("nav_link_2");
	for(var i=0;i<nav_link_2.length;i++){
		nav_link_2[i].style.display='none';
	}
	
	
	var login = document.querySelector('#login');
	login.addEventListener('click', function() {
		var id = prompt("아이디입력");
		if (id == 'ssafy') {
			var pw = prompt("비밀번호입력");
			if (pw == '1234') {
				alert('로그인 성공!!!');
				confirm();
			} else {
				alert('올바르지 않은 입력입니다.')
			}
		} else {
			alert('올바르지 않은 입력입니다.')
		}
	});
	
//	part 3.
	var question = localStorage.getItem('question');
	var pollBtnDiv=document.querySelector('.content-left-poll-btn');
	var pollDiv=document.querySelector('.content-left-poll');
	
	if(question){
		var answer = localStorage.getItem('answer');
		var answerArr = JSON.parse(answer);
		var poll =`
		      <div class="vote-title">[ 당신의 선택 ]</div>
		      <div class="vote-question">${question}</div>
		      <div class="vote-answer">
		        <ul>`
				for (var i = 0; i < answerArr.length; i++) {
				  poll+=`
				  <li>
					<label><input type="radio" name="vote-answer" value="${answerArr[i]}"/> ${answerArr[i]}</label>
				  </li>`
				}
		        poll+=`</ul>
		      </div>
		      <div class="vote-button">
		        <button class="button btn-primary" onclick="javascript:poll();">투표하기</button>
		        <button class="button">결과보기</button>
		      </div>
		      <div class="vote-date">투표기간 : 20.09.01 ~ 20.09.30</div>
		`
		pollDiv.innerHTML=poll;
		pollDiv.style.display='block';
		pollBtnDiv.style.display='none';
		
	}else{
		var poll='현재 진행중인 투표가 없습니다.';
		pollDiv.innerHTML=poll;
		pollBtnDiv.style.display='block';
		pollDiv.style.display='none';
	}
	
	var makepoll = document.getElementById('btn-makepoll');
	makepoll.onclick=function(){
		window.open('makepoll.html','mp','width=400, height=300');
	}
}
confirm = function(){
	var noimg = document.getElementById("noimg");
	noimg.style.display = 'none';
	var profileimg = document.getElementById("profileimg");
	profileimg.style.display = 'block';
	profileimg.style.margin = '0 auto';
	var nav_link_1 = document.getElementsByClassName("nav_link_1");
	for(var i=0;i<nav_link_1.length;i++){
		nav_link_1[i].style.display='none';
	}
	var nav_link_2 = document.getElementsByClassName("nav_link_2");
	for(var i=0;i<nav_link_2.length;i++){
		nav_link_2[i].style.display='block';
		nav_link_2[i].style.float='right';
	}
}
