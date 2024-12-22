// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const user={
    username:"Vishal",
    age:"23",
    welcomeMassaged:function()
    {
        console.log(`hellow ${this.username} welcome to learning process of this keyword in javascipt`)
        console.log(this)
    }
    
}
user.welcomeMassaged();
user.username="Aditya"
user.welcomeMassaged()
console.log(this)//here this refering to global object

function f()
{
    console.log(this);
}
// f();
//<------------ Arrow function ------------->
const addTwo=(n1,n2)=>(n1+n2)
console.log(addTwo(450,50))
// return object by arrow function :for returning object you have rapp up wihtin small bracket
const Obj=()=>({username:"vishal",
    age:"23"
})
console.log(Obj());
// <----Immediatly Invoked function expression---->
// ()()first paranthesis is for function defenition and seconde for function call after function call we have use semicolon';' to esure function call end
(function DB() {
    //named IIFE by function has name DB
    console.log("DB Connected");
})();
//unnamed IIFE
((name)=>console.log(`DB two connected by ${name}`))("Vishal");