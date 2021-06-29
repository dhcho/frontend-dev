// Array 확장: List 메서드 추가(prototype 확장)

Array.prototype.insert = function(index, value){
    if(value instanceof Array) {
        // for(var i = 0; i < value.length; i++) {
        //    this.splice(index++, 0, value[i]);
        // }
        var _this = this;
        value.forEach(function(e){
            _this.splice(index++, 0, e);
        });
    } else {
        this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// 리스트로 사용하기
var a = [1, 2, 4];

console.log(a);
a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']); // 기대[1, 2, 'a', 'b', 3]
console.log(a);               // 결과[1, 2, ['a', 'b', 'c'], 3]

var f = function(param) {
    console.log(this + ":" + param);
}

// f();

o = { name:"me!" };
f.call(o, "douzone@gmail.com");
f.apply(o);