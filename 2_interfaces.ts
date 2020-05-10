// Интерфейсы это по сути тип для обьектов и классов где мы указываем
// какие поля функции и елементы должны присутствовать

interface Rect {
    readonly id: string // readonly указывает что данное поле только для чтения
    color?: string // ? указывает что поле не обязательное
    size: {
        width: number
        height: number
    }
}

const rec: Rect = {
    id: '1234',
    size: {
        width: 30,
        height: 20
    },
    color: '#fff'
}

const rec2: Rect = {
    id: '123',
    size: {
        width: 10,
        height: 5
    }
}
rec2.color = 'black'

// ___________________________________

// Так же мы можем указывать к какому типу может относиться объект

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ___________________________________

// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number // Это функция тип которой указывается через двоеточие
    // И после стрелки указываем тип данных который должен быть возвращен number
}
const rect5: RectWithArea = {
    id: '333',
    size: {
        width: 10,
        height: 10
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ___________________________________

// Класс который имплементируется от интерфейса

interface IClock {  // зачастую интерфейсы называют через большую буквву I
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ___________________________________

// Создадим интерфей для обьекта у которого будет большое кол-во динамических ключей
interface Styles  {
    [key: string]: string // в квадратных скобках мы указываем тип ключа 
}
const css = {
    border: '1px solid black',
    margin: '2px',
    padding: '5px'
}
// [key: string] - относится к border, margin, padding
// : string - к их значению 2px и др