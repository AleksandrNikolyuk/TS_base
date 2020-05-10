//Generic указать тип с помощью generic  синтаксиса

const arryOfNumbers: Array<number> = [1, 2, 3, 4, 5]
const arryOfStrings: Array<string> = ['hello', 'world']

// Бывают ситуации что одна функция работает с разными типами данных

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
reverse(arryOfNumbers)
reverse(arryOfStrings)