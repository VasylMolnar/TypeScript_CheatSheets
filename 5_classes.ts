// -----------------------------------------------------------    Class    ----------------------------------------------------------- //

class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}
// ==============

// Class types modificators
class User2 {

      public name: string;
      private nickName: string;
      protected age: number;
      readonly pass: number;
  
      constructor(name: string, age: number, nickName: string, pass: number) {
          this.name = name;
          this.age = age;
          this.nickName = nickName;
          this.pass = pass;
      }
  
}
  
  const newClass = new User2('Test', 31, 'Test2', 123);
  
  //newClass.name;	    // "Test"
  //newClass.nickName;  // Prop 'nickName' is private and only accessible within class 'User'
  //newClass.age;		    // Prop 'age' is protected and only accessible within class 'User' and its subclasses
  //newClass.pass = 42; // Cannot assign to 'pass' because it is a read-only property

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  constructor() {
    this.go()
  }

  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice

// =====================

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info';
  }
}

