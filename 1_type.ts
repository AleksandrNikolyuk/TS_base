
// TypeScript используется только на этапе разработки


// Тип Boolean

const isFetch: boolean = true
const isLoading: boolean = false
// ___________________________________

// Тип Number

const int: number = 42
// Теперь если даже заменить const на let то переопределить
// на строку нельзя

let int1: number = 30
// int1 = '' // Type '""' is not assignable to type 'number'.ts(2322)

const float: number = 4.3
const num: number = 3e10

// ___________________________________

// Тип String

const text: string = 'Hello world'

// ___________________________________

// Array

const numArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// Указываем что это массив из чисел
const numberArray: Array<number> = [1, 1, 2, 3, 5, 8, 13] 
// Указывает из чего состоит данный класс или обьект
// Это как еще одна форма указания

const textArray: string[] = ['Hello', 'World']
// Указываем что это массив из строк

// ___________________________________

// Есть один уникальный тип Tuple
// Его идея создавать массив из разных типов данных
const contact: [string, number] = ['Alex', 123456789]

// ___________________________________

// Как можно переопределить тип данных
// Для это используют тип Any
let variable: any = 42
//...
variable = 'New string'
variable = []

// ___________________________________

// Function

// Мы можем явно указывать возвращаемый тип данных у функции
// Если функция ничего не возвращает то указываем тип void

function myNam(name: string): void {
    console.log(name)
}
myNam('AlexNik')

// ___________________________________

// Never  - это тип указывается только в двух случаях
// 1)  Функция возвращает ошибку и никогда не заканчивает свое выполнение
    function throwError(message: string): never{
        throw new Error(message)     
    }

// 2)  Когда функция постоянно что то делает
    // function Infinit(): never {
    //     while(true) {}
    // }

// ___________________________________

// Есть спец конструкция которая позволяет создавать свои типы
type Login = string
const login: Login = 'alex'

// Так же мы можем указывать различные типы данных для одной переменной
type ID = string | number
const id: ID = 123
const id1: ID = '123'

// ___________________________________

// Null или Undefined
type SomeType = string | null | undefined
