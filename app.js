/**
 * 1차시
// 이제 var은 거의 안씀. 구글도 쓰지 말라더라
// var a = 10;
// var b = 5; 

const c = 100;
const d = 10;
let myName = "KID";

console.log(c+d);
console.log(c*d);
console.log(c/d);
console.log(""+myName);

myName = "KIDMAN";

console.log(""+myName);

ㅡ
*/

/**
 * 2차시
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

*/

/** 5차시

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek[0]);

daysOfWeek.pop()
console.log(daysOfWeek);

daysOfWeek.push("sun")
console.log(daysOfWeek);

daysOfWeek.shift();
console.log(daysOfWeek);

daysOfWeek.shift("mon");
console.log(daysOfWeek);

console.log("* * *");

function sumVar(...args) {
    let res = 0;
    console.log(args);
    for (let i in args) { res += args[i];}
    return res;
}

 slice : 기존 배열은 변하지 않고, 잘려진 배열을 반환
 splice : 기존 배열 변하고, 잘려진 배열 반환
 split : ( String의 메서드 ) delimeter를 기준으로 잘라서 배열을 만든후 배열을 반환

const varType = [1, 2, "Hello", false, null, true, undefined, 'A'];
console.log(varType);

for(let i in varType) {
    console.log(varType[i]);
}
*/

//6차시 (객체)

// const 자체를 수정하는건 에러가 걸리지만, const 객체 내부의 멤버 변수들을 수정하는 것은 에러에 저촉되지 않는다.


//사실상 이 밑이 제일 얻어갈만 한 결과였음. JS에서도 클래스 생성 가능
/*
class Player {
    constructor (name, points, fat) {
        this.name = name;
        this.points = points;
        this.fat = fat;
    }
    pointUP() {
        return Number(this.points)+1;
    }
}

let Player1 = new Player("KID",10,true);
let Player2 = new Player("MAN",9,false);

console.log(Player1);
console.log(Player2);

Player1.pointUP();

console.log(Player1);

Player1.tall = 185;

console.log(Player1);
console.log(Player1);
console.log(Player2);

console.log("* * *");
*/

/*
let Player = {
    name: null,
    points: null,
    fat: null,
}

let player1 = new Player();
player1.name = "KID";
player1.points = 10;
player.fat = true;

let player2 = new Player();
player1.name = "MAN";
player1.points = 9;
player.fat = false;

console.log(player1);
console.log(player2);
*/

//console.log(player);
//console.log(player.name); // 혹은
//console.log(player["name"]); // 이렇게도 가능함
//player.fat = false;

//7차시+8차시
/*

function sayHello(...args) { // 가변 매개변수 ...를 안해주면 [0]만 출력됨
    console.log("Hello "+args);
}

sayHello("A");
sayHello("M","N");
sayHello("X","Y","Z");

const player = {
    name: "KID",
    sayYES: function(personName) {
        console.log(personName+" SAY YES");
    },
}

// a = {sum: function (a,b) {return a+b}}
player.sayYES("KID");
player.sayYES("MAN");

player.age = 20;

console.log(player);
for(i in player) {console.log(player[i]);}


const calc = {
    add: function(a, b) {console.log("sum: " + (a+b))},
    sub: function(a, b) {console.log("sub: " + (a-b))},
    mul: function(a, b) {console.log("mul: " + (a*b))},
    div: function(a, b) {console.log("div: " + (a/b))},
    pow: function(a, b) {console.log("pow: " + (a**b))}
}

calc.add(10,2);
calc.sub(10,2);
calc.mul(10,2);
calc.div(10,2);
calc.pow(10,2);

*/
/*
class Player {
    constructor (name, points, fat) {
        this.name = name;
        this.points = points;
        this.fat = fat;
    }
    pointUP() {
        return Number(this.points)+1;
    }
}
*/


/*

const calc2 = {
    add: function(a, b) {return a+b;},
    sub: function(a, b) {return a-b;},
    mul: function(a, b) {return a*b;},
    div: function(a, b) {return a/b;},
    pow: function(a, b) {return a**b;}
}

const a = 100;
const b = 20;

const addRes = calc2.add(a,b);
const subRes = calc2.sub(a,b);
const mulRes = calc2.mul(a,b);
const divRes = calc2.div(a,b);
const powRes = calc2.pow(a,b);

*/


const x = Number(prompt("Input X"));
const op = prompt("Input Operator you want: e.g) +-/* or **");
const y = Number(prompt("Input Y"));

let res;

calc(x, y);

function calc(x, y) {
    switch(op) {
        case '+':
            res = x+y;
            return res;
        case '-':
            res = x-y;
            return res;
        case '*':
            res = x*y;
            return res;
        case '/':
            res = x/y;
            return res;
        case "**":
            res = x**y;
            return res;
        default: console.log("Please input correct operator");
    }
}
console.log(res);

/*
index => idx
count => cnt
value => val
regist => reg
temporary => tmp
ascent = >asc
decrease => desc
identification => id
number => no, num
array => arr
string => str
column => col
field => fld
result => res
*/