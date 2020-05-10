const tt: string = '123';
const rr: number = 6;
let bool: boolean | string = true;
bool = '';

type IStr = string | number | null;
type IArray = number[]


const x: IStr = 123;
const ww: IArray = [1, 2, 3, 4, 5];

const Newfunction = (name: string | number): string | number => name;

function NN() { }

Newfunction('Ale');
Newfunction(123);


const c: string = 'sf'