// -----------------------------------------------------------    Generic    ----------------------------------------------------------- //
/*
Generics в TypeScript - це механізм, який дозволяє створювати загальні типи, що працюють з різними типами даних. Вони надають можливість 
параметризувати типи в функціях, класах і інтерфейсах, щоб забезпечити переиспользование коду і підтримку типобезпечних операцій.
Завдяки цьому можна писати більш гнучкий і безпечний код, оскільки компілятор перевіряє правильність типів під час компіляції.
*/

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'World']


function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)


// Example of using 'any'
const getter = (data: any): any => data;

getter(10);         // 10
getter('test');     // "test"

// Using of generic type
const getter3 = <T>(data: T): T => data;

function getter4<T>(data: T): T {
    return data;
}

//////////////////////////////////// interface ////////////////////////////////////

interface BoolCheck<T> {
  value: T,
  is: boolean,
}

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
      return { value: arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
      return { value: arg, is: false }
  }
  return { value: arg, is: !!arg }
}


//////////////////////////////////////


interface HasID {
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here 
  return user
}

console.log(processUser({ id: 1, name: 'Dave' }))
//console.log(processUser({ name: 'Dave'}))



/////////////////////////////////////// Class ///////////////////////////////////////
 
// Generic class
class UserTest<T> {

      constructor(public name: T, public age: T) {}
  
      public getPass(): string {
          return `${this.name}${this.age}`;
      }
  
}


// Multiple generic types
class UserTest2<T, K> {

      constructor(public name: T, public age: K) {}
  
      public getPass(): string {
          return `${this.name}${this.age}`;
      }
  
}


// Specify generic type 'K' with key-word 'extends'
class UserTest3<T, K extends number> {

      constructor(public name: T, public age: K) {}
  
      public getPass(): string {
          return `${this.name}${this.age}`;
      }
  
      public getSecret(): number {
          return this.age**2;
      }
  }


