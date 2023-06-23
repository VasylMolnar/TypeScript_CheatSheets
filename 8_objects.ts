// ----------------------------------------------------------- Object ----------------------------------------------------------- //
    
// Object type using any
let userTest: any = {
    name: 'Hello',
     age: 30,
};
    
userTest = 'test';	// Now type of user is string
userTest .nickName = 'HELLO';


// Define object type
let userTest2: { name: string, age: number } = {
        name: 'Hello',
        age: 30,
};
    
userTest2.nickName = 'HELLO';  // Property 'nickName' does not exist on type '{name: string; age: number;}'


//work
const userTest3: { name: string, age: number, nickName: string } = {
        name: 'World',
        age: 30,
        nickName: '',
 };

userTest3.nickName = 'HELLO';



///////////////////// Using Type for objects structure /////////////////////
interface PersonTest {
     name: string
     age: number
     nickName?: string
};

// Apply Person type for objects with the same structure
let user4 :PersonTest= {
    name: 'Hello',
    age: 30,
    nickName: 'World',
};

// extends
interface PersonTest2 extends PersonTest{
    getPass(): string;
}

let admin:PersonTest2 = {
        name: 'name test',
        age: 20,
        getPass(): string {			// <--- new method
            return `${this.name}${this.age}`;
        },
};

