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
	var render = function(vo, mode) {
		html = "<li data-no='" + vo.no + "'>" + 
				"<strong>" + vo.name + "</strong>" +
				"<p>" + vo.message + "</p>" +
				"<strong></strong>" + 
				"<a href='' data-no='" + vo.no + "'>삭제</a>" + 
				"</li>";
		/*
		if(mode) {
			$("#list-guestbook").append(html);
		} else {
			$("#list-guestbook").prepend(html);
		}
		*/
		$("#list-guestbook")[mode ? "append" : "prepend"](html);
	}
	
	var listEJS = new EJS({
		url: "${pageContext.request.contextPath }/ejs/list-template.ejs"
	});
	
	var fetch = function() {
		$.ajax({
			url: "${pageContext.request.contextPath }/guestbook/api/list",
			dataType: "json",
			type: "get",
			success: function(response) {
				// response.data.forEach(function(e) {
				// 		render(e, true);
				// });
				var html = listEJS.render(response);
				$("#list-guestbook").append(html);
			}
		});
	}
	
	$(function() {
		$("#btn-fetch").click(function() {
			fetch();
		});
		
		// 최초 데이터 가져오기
		fetch();
	});
</script>
</head>
<body>
	<ul id="list-guestbook"></ul>
	<div style="margin: 20px 0 0 0">
		<button id="btn-fetch">다음 가져오기</button>
	</div>
</body>
</html>
