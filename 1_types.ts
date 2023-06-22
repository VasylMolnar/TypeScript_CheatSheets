// -----------------------------------------------------------    Type    ----------------------------------------------------------- //

// Type
type Login = string //only STRING

const login: Login = 'admin'
// const login2: Login = 2  ERROR  (Login === string)  not NUMBER


type ID = string | number // STRING OR NUMBER
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true  ERROR  (ID ===  STRING OR NUMBER) not BOOLEAN


type SomeType = string | null | undefined // STRING OR NULL OR UNDEFINED


type forObj = {
  id: number | string
  name: string
  phone: number
}

const obj:forObj = {
  id:1,
  name:"test",
  phone: 123
}

// ----------------------------------------------------------- Type Data ----------------------------------------------------------- //

// ---------- boolean ---------- //
type typeIsFetching = boolean;
const isFetching: typeIsFetching = true

//or
// const isFetching: boolean = true
const isLoading: boolean = false


// ---------- number ---------- //
const int: number = 42
const float: number = 4.2
const num: number = 3e10


// ---------- string ---------- //
const message: string = 'Hello Typescript'


// ---------- undefined and null ---------- //
const u: undefined = undefined;
const n: null = null;


// ---------- Array ---------- //
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // Generic type
const words: string[] = ['Hello', 'Typescript']

// ---------- Array Tuple ---------- //
const contact: [string, number] = ['Typescript', 1234567]

type b = string | number // STRING OR NUMBER
const a: b[] = [1,'asd']

// ---------- Any---------- //
let variable: any = 42
variable = 'New String'
variable = []
variable = [{id : 1, name:'test',email:"123Test@gmail.com"}]



// ----------------------------------------------------------- Function Type ----------------------------------------------------------- //
//void
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('World')

// Never
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}

