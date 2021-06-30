/**
 * 5. Arrow Function
 */
const power = function(x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    process.stdout.write(`${number}:${power(number)}\t`);
});

// ex1
console.log("\n---");
const pwoer2 = x => x * x
numbers.forEach(function(number) {
    // let result = (function(x) {
    //     return x*x;
    // })(number);

    // let result = (x => {
    //     return x*x;
    // })(number);

    // let result = (x => x*x)(number);
    // process.stdout.write(`$(number):${result}\t`);
    process.stdout.write(`${number}:${power(number)}\t`);
});

// ex3
console.log("\n---");
numbers.forEach(n => process.stdout.write(`${n}:${(x => x*x)(n)}\t`));

// ex4 - 여러행 함수
console.log("\n---");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5 == 0) {
        process.stdout.write(`${e}\t`);
    }
});

// ex5: this를 어휘적 바인딩(Lexical Binding)
console.log("\n---");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동', '희동이'],
    printFriends: function() {
        this.friends.forEach(friend => console.log(`${this.name}의 친구 ${friend}`));
    }
}

dooly.printFriends();