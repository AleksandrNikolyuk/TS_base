function add(a: number, b: number): number {
    return a + b
}

function toApp(a: string): string {
    return a.trim().toUpperCase()
}

// Мы так же можем вызывать функцию с разными параметрами и получать разные значения

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionDefault extends MyPosition {
    default: string
}

function position(): MyPosition  // Если функция не будет ничего получать то она вернет интерфейс MyPosition
function position(a: number): MyPositionDefault // Eсли функиця получает один параметр то возвращает другой интерфейс MyPositionDefault
function position(a: number, b: number): MyPosition // Если оба параметра то она вернет интерфейс MyPosition
// Тут мы определили потенциальные возможности вызова функции position

function position(a?: number, b?: number) {
    if(!a && !b) {
        return { x: undefined, y: undefined }
    }
    if(a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b }
}
console.log('Emoty', position()); // Empty { x: undefined, y: undefined }
console.log('One param', position(42)); // One { x: 42, y: undefined, default: '42' }
console.log('Two param', position(5, 3)); // Two { x: 5, y: 3 }
