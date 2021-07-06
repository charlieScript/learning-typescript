// TYPES
// primitives (explicit)
const num: number = 30;
const str: string = 'charles';
const bool: boolean = false;
const mixedpri: any = 'f';

// arrays
const names: string[] = ['hey'];
const age: number[] = [1, 2, 3];
const arrbool: boolean[] = [false, true];
const arrMixed: any = [false, 3, 'hry'];

// objects
const obj: object = {
  test: 'lol'
}

const obj2: {} = {
  lol: 'lol'
}

// object declaration with object type
let person: {
  nam: string,
  age: number
}




// UNION TYPES
// primitve
let strUnion: string | number = '2'
let numUnion: string | number = 3
// arrays
let arrUnion: (boolean | number)[] = [false, 3]