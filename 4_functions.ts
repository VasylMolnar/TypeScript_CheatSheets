// -----------------------------------------------------------    Function    ----------------------------------------------------------- //

function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}


//Choose one
// function position(): MyPosition
// function position(a: number): MyPositionWithDefault
// function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }

  return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))

// ------------------------------------------- Arrow function expressions ------------------------------------------- //

// Arguments type
const createPassword = (name: string, age: number) => `${name}${age}`;

// Multiple argument types
const createPassword2 = (name: string, age: number | string) => `${name}${age}`;

// Default Arguments
const createPassword3 = (name: string = 'Max', age: number | string = 20) => `${name}${age}`;

createPassword('Jack', 31);		  // 'Jack31'
createPassword2('Jack', '31');	// 'Jack31'
createPassword3();              // "Max20"



// ------------------------------------------- REST ------------------------------------------- //
// REST type
const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skils are ${skills.join()}`;

// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React');	// "Jack, my skils are JS,ES6,React"

// Returned type is string
const createPassword4 = (name: string, age: number | string): string => `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;

// Returned type is object
const createEmptyObject = (): object => ({});

// Never Type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};


//Void 
let myFunc: (firstArg: string) => void;