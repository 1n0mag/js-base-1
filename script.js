

// Однострочгый коментарий
/*Многострочний 
коментарий*/

/* str, my_str, myStr, a1 , $ , $a допустимые имена переменных*/

//Переменные 
//Ключевое слово var, let, const 
//Формат LowerCamelCase (верблюжья анотация)

// var LeftBorderWidth = 1;
// let Second = 2;
// const pi = 3.14; 

// console.log(Second);

//Типы данных классификация

//Примитивный тип данных 

//Строка string 
// двойные ковычки, одинарные ковычки-простые, обратные-имеют расширенный фулкционал

// let string = 'hello';
// console.log(string);

// let name = "Иван";
// console.log(name);


// let name = "Иван";
// alert(`Привет,  ${name}`);
// console.log (`Привет,  ${name}`);

//Числа number 

// let number = 5 ;
// console.log(number);

//Специальный тип данных

null // Спец значение которое представляет отсутствующий объект

// console.log(something);

undefined //представляет значение переменной, которая не была инициализирована

// let numb; 
// console.log(numb);


NaN //Специальное значение "Не число", которое говорит о том что была выполнена бессмысленная работа (операция)

// console.log('string' * 4);

Infinity //Бесконечное множество, известная ошибка при делении на 0 (бывает отрицательным)

// console.log(4/0);

//Логический тип данных boolean (true,false)

// let boolean = true;
// console.log(boolean);

//Абстрактный тип данных object{}, это набор свойств и значений 

// let object = {}

// let persone = {
//     name: 'Bob',
//     age: 39,
//     isMarried: false
// };
// console.log (persone['age']);

//Масив 

// let arr = ['plum.jpg', 'apple.bmp','orange.png'];
// console.log(arr[0]);

//Простое Общение с пользователем 

// alert('hello,world')

// let answer = confirm ('Are you here?')
// console.log(answer);

//Оператор typeof,для определения типа данных 
// let answer = prompt('How are you old?', 'Yes');
// console.log(typeof (answer));

//Операторы js
//Унарный + 

// console.log('arr'+' - object');
// console.log('4'+ ' - object')

//Инкремент и декремент 
// ++ Префиксный инкремент
// -- Постфиксный декремент 

// let incr = 10;
//     decr = 10;

//     console.log(insr++);
//     console.log(--decr);

//Остаток от деления 

// console.log(5%2);

// = присваивание 
// == проверка  на равенство 
// === проверка на одинаковость srting === number -false 

// console.log('2' == 2 );

//Оператор && (И)

// let isCheched = false;
//     isClosed = true;
// console.log(isCheched && isClosed);

//Оператор || (или)

// let isCheched = false;
//     isClosed = false;
// console.log(isCheched || isClosed);


//Обьявлние нескольких переменных в JavaScript
//1
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a) 
// console.log(b) 
// console.log(c) 

//2
// let a=1, b = 2, c = 3;

//3
// let a, b, c;
// a = 1;
// b = 2;
// c = 3;

//Изменение значений переменных(Пранк)

// let a;
// a = 1;
// alert(a);

// a = 2;
// alert(a);

// let a = 1; ошибочное действие одна переменная была обьявлена 2 или более раз
// alert(a)

// let a = 2;
// alert(a)

//2 

// let a = 1;
// alert(a) 

// b = 3;
// alert(b)

//3 
// let a;
// a = 1;
// alert(a);

// a = 2;
// alert(a)

//Математические операции с числами
//Сложение 
// let a = 1+2;
// alert(a); //=3

// //Вычитание 
// let b = 2-1; 
// alert(b); //1

// //Умножение
// let c = 3 * 2;
// alert(c);//6

// // Деление
// let d = 4 / 2;
// alert(d); //2

// Задача 1 

// Создайте переменную a. Запишите в нее сумму числе 1,2 и 3 
// С помощью функции alert выведите на экран содержимое переменной a.

//Решение
// let a = 1+2+3;
// alert(a)
//Математические Операции над переменными
//1 
// let a = 1;
// let b = 2;
// alert(a+b);//3

//2 
// let a = 1;
// let b = 2;
// let c = a + b;
// alert(c);//3

// Задача 2 
//1 
//Создайте переменную a со значением 10 и перемнную b со значением 2 
//Выведите их сумму, разность, произведение , частное.

//Решение 
 
// let a = 10;
// let b = 2;
// alert (a+b);
// alert (a-b);
// alert (a*b);
// alert (a/b);

//2
//Создайте переменную c со значением 10 и переменную d со значением 2 и переменную с со значением 3. Выведите их сумму на экран
//Результат присвойте  переменной result и выведети её через alert или console.log

// var c = 10;
// var d = 2;
// let e = 3;
// let result = (c+d+e);
// alert(result);
// console.log(result);

//3
//Создайте переменную a со значением 1, переменную b со значением 2 и переменную c со значением 3. Выведите на экран их сумму

// let a = 1;
// let b = 2;
// var c = 3; 
// alert(a+b+c);

//4 создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a b и результат присвойте c
//сложите переменные c, a в результат запишите в переменную result. Выведете знчение result

// let a = 10;
// var b = 5;
// let c = (a+b);
// let result = (c);
// alert (result);

//Приоритет умножения
// let a = 1;
// let b = 10; 
// let c = 2;
// alert(a+b*c)

//Выделение приоритета в выражении с помощью ()
// let a = 1;
// let b = 10;
// let c = 2;
// alert((a+b)*c)

//Дробные выражения
// let a = 1.5
// let b = 0.75 
// let c = (a+b)
// alert(c)

//Отрицательные числа
// let a = -100; 
// alert(a);
// let a = 10
// let b = -a
// alert(b)

//Вычисление остатка %

// let a = 13;
// let b = 5; 
// alert(a%b);

//Возведение в степень **
// let a = 2 
// let b = 10 
// alert(a ** b)

// let a = 1 false
// let a = 0 true
// let a = -3 false
// console.log(a == 0 )

// let a = 1 true
// let a = 0 false
// let a = -3 false
// alert (a > 0)

// let a = 1 false
// let a = 0 false
// let a = -3 true
// alert (a<0)

//  let a = 1 true
// let a = 0 true
// let a = -3 false
// alert(a >= 0)

// let a = 1 false
// let a = 0 true
//et a = -3 true
// alert (a <= 0)

// let a = 1 true
// let a = 0 false
// let a = -3 true

// let test = "test"
// let a = "test" true 
// let a = "тест" false
// let a = -3 false
// alert(a == test )

// let a = '1' true
// let a = 1 false 
// let a = 3 false 
// alert (a === '1')

// let test = true true
// let test = false false 
// alert (test == true)

// let test = true false 
// let test = false true
// alert (test !== true)

// let a = 5 false
//let a = 0 false
// let a = -3 false
// let a = 2 true
// alert(5>a>0)