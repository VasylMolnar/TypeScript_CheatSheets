// -----------------------------------------------------------    interface    ----------------------------------------------------------- //
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
// rect2.id = '3232' ERROR (readonly id: string)
var rect3 = {};
var rect4 = {}; //Generic type
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
// ---------------------------------------- class ---------------------------------------- //
// Simple Class example
var UserClass = /** @class */ (function () {
    function UserClass(name, age) {
        this.name = name;
        this.age = age;
    }
    UserClass.prototype.getPass = function () {
        return "".concat(this.name).concat(UserClass.secret);
    };
    UserClass.secret = 12345; // static property
    return UserClass;
}());
console.log(new UserClass('test Name', 31)); // { name: 'test Name', age: 31 }
console.log(UserClass.secret);
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
