// Enum - это  вспомогательна сущность которая позволяет лучше структурировать код
// если присутствуют однотипные елементы

// Есть два типа записи

enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart 
console.log(membership); // 1
// Если задавать enum таким образом то они присваивают значения как в массиве 0, 1 ...



// Есть Реверс enum - это когда можем получить строковоего его значение
const reversMembership = Membership[2]
console.log(reversMembership); // Premium

// ___________________________________

enum Midea {
    FACEBOOK = 'facebook', // Указываем значение
    INSTAGRAM = 'instagram'
}

const socialMedia = Midea.INSTAGRAM // Получаем уже сразу значение а не индекс
console.log(socialMedia); // INSTAGRAM



