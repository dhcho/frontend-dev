<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
	const vo = {
			name: "둘리",
			password: "1234",
			message: "ㅎㅇ"
	};

	$(function() {
		$("button").click(function() {
			$.ajax({
				url: "${pageContext.request.contextPath }/api/post02",
				async:true,
				dataType: "json",  // 받을 때 포맷
				type: "post",      // 요청 method
				contentType:"application/json",
				data: JSON.stringify(vo),
				success: function(response) {
					let html = "";
					html += ("<h4>" + response.data.no + "</h4>");
					html += ("<h5>" + response.data.name + "</h5>");
					html += ("<p>" + response.data.message + "</p>");
					
					$("#data").append(html);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test - post data2(json format)</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>
