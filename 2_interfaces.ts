// -----------------------------------------------------------    interface    ----------------------------------------------------------- //

/*
  interface vs type

 1) Визначення структури об'єкта:
        Використання type: За допомогою type ви можете створити новий тип з вказаною структурою об'єкта. Наприклад: type PersonType = { name: string; age: number; };
        Використання interface: Інтерфейс також дозволяє визначити структуру об'єкта. Наприклад: interface PersonInterface { name: string; age: number; }
  
 2) Розширення та наслідування:
        Використання type: Типи не підтримують розширення або наслідування. Ви можете об'єднати типи за допомогою оператора об'єднання (|) або використовувати узагальнення типів.
        Використання interface: Інтерфейси можуть бути розширені іншими інтерфейсами за допомогою ключового слова extends. Це дозволяє створювати ієрархію інтерфейсів та наслідувати їх властивості.

 3) Реалізація класами:
        Використання type: Типи не можуть бути реалізовані класами.
        Використання interface: Інтерфейси можуть бути використані для опису контракту класу, який повинен реалізувати всі властивості та методи, вказані в інтерфейсі.
*/

interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '3232' ERROR (readonly id: string)


const rect3 = {} as Rect
const rect4 = <Rect>{} //Generic type


// ---------------------------------------- extends ---------------------------------------- //
interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}


// ---------------------------------------- class ---------------------------------------- //

// Simple Class example
class UserClass {
  static secret = 12345;  // static property
  constructor(public name: string, public age: number) {}


  getPass(): string {
    return `${this.name}${ UserClass .secret}`;
  }

}

console.log( new UserClass('test Name', 31));// { name: 'test Name', age: 31 }
console.log(UserClass.secret  )

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}





// =================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}


