// 1.
// unnamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.
import unnamedFunction from './ex08.01.mjs';
import unnamedObject from './ex08.02.mjs';

// 2.
// named export는 import 대상이 다수이기 때문에 특정 이름으로 import할 수 없다.
// 대신에 * as ~ 를 사용할 수 있다.
// import m from './ex08.03.mjs';
import * as m from './ex08.03.mjs';

// 3.
// 특정 이름을 사용해서 구조 분해가 가능하다.
import { subtract } from './ex08.04.mjs';

// 4.
import math, { add } from './ex08.05.mjs';

console.log(unnamedFunction(100, 200), unnamedObject.subtract(100, 200));
console.log(m.add(100, 200), subtract(100, 200));
console.log(add(100, 200), math.subtract(100, 200));