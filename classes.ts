class TypeScript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}

class Car {
    readonly model: string;
    readonly numberWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel; // Даже если поле model readonly мы все равно можем его перезаписать
        // но только внутри конструктора
    }
}
// Это все все можно записать более лаконичнее

class newCar {
    readonly numberWheels: number = 4;
    constructor(readonly model: string) {}
}

// ___________________________________

// Модификаторы их есть 3 вида
// protected - данные поля могут быть доступны его классу и всем наследуемым классам
// public - (он всегда по умолчанию если не указывать модификатор)
// private - доступны только в том классе в котором были определены

class Animal {
    protected voice: string = "";
    public color: string = "black";
    private go() {
        console.log("Go");
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
        // тут не доступен  private свойство go
    }
}
const cat = new Cat(); // у cat мы не можем вызвать protected свойство (cat.voice)
// мы можем работать только через функцию setVoice
console.log(cat.color);

// ___________________________________

//Абстрактные классы и методы

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log("Component on render");
    }
    info(): string {
        return "This is info";
    }
}
