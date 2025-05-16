//bass question
//Q1
let nickname ='ツッチー';
let age ='31歳';
console.log(nickname,age)

let greet ='私のニックネームは' + nickname + '年齢は' + age + 'です！';
console.log(greet)

//Q2
let languages =['Javascript','Python','PHP','Ruby','Go']
console.log('languages[0]=>',languages[0])
console.log('languages[1]=>',languages[1])
console.log('languages[2]=>',languages[2])
console.log('languages[3]=>',languages[3])
console.log('languages[4]=>',languages[4])
console.log('languages.length=>',languages.length)

let languageText =`私の好きな言語は${languages[0]}です。次は${languages[1]}を勉強したいです。`
console.log(languageText);

//Q3
let user;
  user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age)

//Q4!
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1])

//Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age)/3)

//Q6
let Hello = 'Hello';
function sayHello(){
  console.log(Hello)
}
sayHello();

let World = function (){
  return 'World';
}
let sayWorld = World();
console.log(sayWorld)

//Q7
user = {
  birthday: '2000-09-27',
  sayHello: function(){
    console.log('Hello!');
  }
};
user.sayHello();
console.log(user.birthday)

//Q8
let calc = {
  add :function (x,y){
    console.log(x + y);
  },
  subtract :function (x,y){
    console.log(x - y);
  },
  multiply :function (x,y){
    console.log(x * y);
  },
  divide :function (x,y){
    console.log(x / y);
  }
};
calc.add(5,2);
calc.subtract(29,19);
calc.multiply(7,7);
calc.divide(25,5);

//Q9!　宿題！→ OK ハードコーデイングではなく
function reminder (x,y){
  let back = x % y
  return back;
};
let x;
let y;

x = 6;
y = 3;

console.log(x + 'を' + y + 'で割った余りは' +reminder(x,y)  + 'です。')

//Q10
/*
ローカル関数内でスコープが留まっているためログの参照先として定義されていない。
function外で変数を定義し、再代入という形で対応することが必要。
ただし、グローバル関数はどこからでも値が書き換えられると言う点からバグが発生しやすくなる為あまり使用しない方が良い。
*/

//deverop question
//Q1
let numb = Math.floor(Math.random() * 9) + 1;
console.log(numb)

//Q2!
function myFunc (callback){
setTimeout (function(){
  callback();
},3000)
}

function output(){
  console.log('Hello World!');
}

myFunc(output);

//Q3
let num;
num = 0;
if (num > 0){
  console.log('num is greater than 0')
} else if (num < 0){
  console.log('num is less than 0')
} else {
  console.log('num is 0')
};

/*コーディング規約　宿題！
エンジニア、プログラマーが複数人で同一タスクやプロジェクトを行う際にソースコードについて定めるルール
全員しっかり読みやすくするためにある概念 */

//Q4!　for文の認識→処理順を勉強 宿題
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i)
};
console.log(numbers)

/*for (①初期値;②条件式;③後処理){
  ④繰り返す処理
}
まず①が初期値として変数に代入され、②の条件式がチェックされる。
条件式がtrueだった場合、④のくり返す処理が実行される。以降②の条件式がfalseになるまで④が処理される。
falseだった場合、処理が終了される。

上記Q4の場合、変数iに0が代入され、以降1ずつ足され変数numbersに格納される。
この処理が99になるまで繰り返される。
*/

/*for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}; */

//Q5! ＝Q３と同じように書く→ OK　　<調べて持ってきたコードは理解するようにする>　
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++){
  let item = mixed[i];
    if (typeof item  === 'number' && !isNaN(item) && item % 2 === 0){
      console.log(item + 'even')
    } else if (typeof item === 'number' && !isNaN(item) && item % 2 === 1){
      console.log(item + 'odd')
    } else {
      console.log( item + 'not number')
    }
  }