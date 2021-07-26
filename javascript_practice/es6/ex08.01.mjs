/**
 * unnamed export(default)
 * 
 * module.exports(CommonJS) 유사
 * 
 */

export default function(a, b) {
    return a + b;
}

// 오류: 이름없이 export하기 때문에 하나만 이름없이 export 할 수 있다.
// export default function(a, b) {
//     return a - b;
// }