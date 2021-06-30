// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : URL을 전부 encoding, (X), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : parameter 만 encoding, (O)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIcomponent : 값만 encoding 해야하는 경우 (O)
var url4 = encodeURIComponent(url); // 안좋은 사용 예
console.log(url4);

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=더존비즈온&email=douzone@gmail.com

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

var url = "http://mysite.com/user";
var param = {
    no: 10,
    name: '더존비즈온',
    email: 'douzone@gmail.com'
}

var url5 = url + "?" + toQueryString(param);
console.log(url5);