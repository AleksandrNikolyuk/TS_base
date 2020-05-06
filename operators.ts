interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // name | age

let key: PersonKeys = 'name'
key = 'age'


type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}
// Теперь мы можем воспользоваться данным типом но не включая 
// некоторые поля к примеру _id и createAt

// 1
type UserKeyNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // остается name | email
type UserKeyNoMeta1 = Pick<User, 'name' | 'email'> // указываем поля которые мы хотим забрать

let u1: UserKeyNoMeta = 'name'

// u1 = '_id' 
// Получаем ошибку так как тут мы можем задавать только  name | email

