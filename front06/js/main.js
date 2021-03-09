$(function(){
	$('#but').click(function(){
		$.ajax({
			url:'./userlist_xml.jsp',
			success: find,
			dataType:'xml',
			error:function(xhr, status, err){
				alert(err)
			}
		})
	})
});
	
function find(data){
	var no = $('no',data).text()
	var id = $('id',data).text()
	var title = $('title',data).text()
	var content = $('content',data).text()
	
	var html=`<table border='1'>
			  <tr><th>게시글 번호</th><td> ${data.no}</td></tr>
			  <tr><td>작성자</td><td>${data.id}</td></tr>
			  <tr><td>제목</td><td>${data.title}</td></tr>
			  <tr><td colspan='2'>내용</td></tr>
			  <tr><td colspan='2'>${data.content}</td></tr>
			  `
	$('#content').html(html)
}
