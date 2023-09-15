

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

let isCheched = false;
    isClosed = false;
console.log(isCheched || isClosed);