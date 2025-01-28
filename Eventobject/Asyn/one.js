//<-------------------- The setTimeout()--------------------------> 
// The setTimeout() function is used to add delay or scheduling the execution of a specific function after a certain period. It’s a key feature of both browser environments and Node.js, enabling asynchronous behavior in code execution.Syntax:
// setTimeout(function, delay(in ms), arg1, arg2, ...);
setTimeout(function() {
    console.log("Vishal")
}, 2000);
// passing referance
let fun=function()
{
    console.log("hello,in this scenario ,reference is passed");
}
setTimeout(fun,2000);