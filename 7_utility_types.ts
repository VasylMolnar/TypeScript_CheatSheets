// -----------------------------------------------------------    Utility Types    ----------------------------------------------------------- //

//https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
//key = "test" ERROR

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}


///////////////////////  Readonly<T> ///////////////////////
interface IUser {
  name: string;
}

const user: Readonly<IUser> = {
  name: 'TEST NAME',
};

// user.name = 'NAME 2 TEST';      // Error: cannot reassign a readonly property


/////////////////////// Record<K, T> ///////////////////////
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
    //test: "home" ERROR
};


/////////////////////// Pick<T, K> ///////////////////////
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};


/////////////////////// Omit<T, K> ///////////////////////
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Omit<Todo, 'description'>;

const todo2: TodoPreview = {
  title: 'Clean room',
  completed: false,
};


/////////////////////// Exclude<T, U> ///////////////////////
type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

/////////////////////// Extract<T, U> ///////////////////////
type T0 = Extract<"a" | "b" | "c", "a" | "f">;                // "a"
type T1 = Extract<string | number | (() => void), Function>;  // () => void

///////////////////////  NonNullable<T> ///////////////////////
type T0 = NonNullable<string | number | undefined>;   // string | number
type T1 = NonNullable<string[] | null | undefined>;   // string[]


///////////////////////  ReturnType<T> ///////////////////////
declare function f1(): { a: number, b: string };

type T0 = ReturnType<() => string>;                                  // string
type T1 = ReturnType<(s: string) => void>;                           // void
type T2 = ReturnType<(<T>() => T)>;                                  // {}
type T3 = ReturnType<(<T extends X, X extends number[]>() => T)>;    // number[]
type T4 = ReturnType<typeof f1>;                                     // { a: number, b: string }
type T5 = ReturnType<any>;                                           // any
type T6 = ReturnType<never>;                                         // any
type T7 = ReturnType<string>;                                        // Error
type T8 = ReturnType<Function>;                                      // Error



///////////////////////  InstanceType<T> ///////////////////////
class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;     // C
type T1 = InstanceType<any>;          // any
type T2 = InstanceType<never>;        // any
type T3 = InstanceType<string>;       // Error
type T4 = InstanceType<Function>;     // Error