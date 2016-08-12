/*! function.js © yamoo9.net, 2016 */

// 1. 함수 선언문(Function Declaration)
// if() {}
// while() {}
// for() {}
// 함수 블록문 뒤에 세미콜론(;)을 사용하면 안됨.
// function 함수이름(){}

// 2. 함수 표현식(Function Expression)
// 함수 블록문 뒤에 세미콜론(;)을 사용해야됨.
// var 변수(함수이름) = function(){};

// 3. 『함수』 생성자 함수를 사용하여 함수를 생성하는 방법
var logIdentity = new Function('console.log("this is function object.")');

// 함수를 참조하고 있는 변수 이름을 통해서 호출 (실행 연산자 `()` 사용)
logIdentity();

// ---------------------------------------------------------------------

// 변수의 특징
// 하나의 변수에는 하나의 데이터 값만 담을 수 있다.
var favorite_item_01 = '커피';
var favorite_item_02 = '에어컨';
var favorite_item_03 = '선풍기';
var favorite_item_04 = '깐풍기';

// 배열 <- 자료형
// 배열의 특징
// 집합 (데이터들을 묶을 수 있다)
// 여러 개의 변수를 만들지 않고도
// 하나의 변수에 배열 데이터를 참조함으로서
// 다수의 데이터를 관리할 수 있다.
// var favorite_items = ['커피', '에어컨', '선풍기', '깐풍기'];
var favorite_items = new Array(); // []
favorite_items[0] = '커피';
favorite_items[1] = '에어컨';
favorite_items[2] = '선풍기';
favorite_items[3] = '깐풍기';

// 연관 배열: 배열 원소로 추가된 아이템이 아니라, 객체의 속성임.
favorite_items['true-or-false'] = '깐풍기는 한웅님이 추천한 메뉴이다';
// favorite_items.true-or-false [X]

// console.log(favorite_items);
// console.dir(favorite_items);

// -----------------------------------------------------------

// 데이터 유형별 변수 선언 및 값(리터럴) 할당
// 변수 선언
var num, str, boo, fnc, arr, obj;

// 선언된 변수에 각각 데이터를 리터럴 표현식으로 복사/참조
// 원시 데이터 유형 (복사)
num = 1203;
str = 'hey, jude';
boo = !0;
// 자료형 데이터 (참조)
fnc = function() {};
arr = [];
obj = {};

// var 키워드를 한 번만 사용하는 패턴
// (var singleton pattern)
// var num = 9,
//     str = '',
//     boo = true,
//     fnc = function(){},
//     arr = [],
//     obj = {};

/**
 * --------------------------------
 * 자바스크립트 데이터 유형 체크
 * 1. typeof 키워드를 사용하는 방법
 * ----------------------------- */

typeof num;        // 'number'
typeof str;        // 'string'
typeof boo;        // 'boolean'
typeof fnc;        // 'function'
typeof obj;        // 'object'
typeof arr;        // [기대] "array" [결과]'object': 문제 발생! 설계 오류!!!!
typeof null;       // [기대] "null" [결과]'object': 문제 발생! 설계 오류!!!!
typeof undefiend;  // 'undefined'

typeof RegExp;     // 'function'
typeof new RegExp; // 'object'
typeof Math;       // 'object'

/**
 * --------------------------------
 * 자바스크립트 데이터 유형 체크
 * 2. instanceof 키워드를 사용하는 방법
 * ----------------------------- */

// 역할: 생성자 함수(객체를 생성하는 자)를 통해 생성된 객체(인스턴스)인가?
// 객체 instanceof 생성자

arr instanceof Array; // true : typeof의 설계 오류 문제점을 해결할 수 있다!

// 약점: 원시 데이터 유형(리터럴 방식)의 경우는 올바른 대답을 해주지 않는다.
'primitive' instanceof String;             // false
new String('primitive') instanceof String; // true

/**
 * --------------------------------
 * 자바스크립트 데이터 유형 체크
 * 3. constructor 속성을 사용하는 방법
 * ----------------------------- */

// ※ 객체 유형의 데이터에서는 완벽한 결과를 반환한다.
'primitive'.constructor === String;               // true
(new String('primitive')).constructor === String; // true

// 단... 객체가 아닌 유형에서는 오류를 발생시킨다.
// Uncaught TypeError: Cannot read property 'constructor' of null(…)
// 이유는... constructor 속성은 객체만이 가지는 속성이기 때문이다.
(null).constructor; // null, undefined는 객체가 아니기 때문에 속성이 없다.