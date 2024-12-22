//add two number using function
//function definition
//num1 ,num2 is parameters
const addNumber=function(num1,num2){
    return num1+num2
}
const res=addNumber(3,44)//5,4 is arguments 
console.log(res)
const loggedInMassage=function(username)
{
    if(!username)return "please enter username"
    return`${username} just logged in`
}
console.log(loggedInMassage("Vishal")+"\n");
console.log(loggedInMassage())// if no argument will be passed then undefined will be assign to username
// we can also give a default value if the argument is not passed

// when we don't the number of argument will be passed by user then in function definition we use rest operator 
const itemPricesInCarts=function(item1,...items)
{
    return items;
}
// if arguments is more than one then rest all vales assign to items 
console.log(itemPricesInCarts(10,123,500,620,456,5963))

//<-------function and Object--------->
const user={
    name:"Vishal",
    age:23
}
function hadleObject(anyobj)
{
    console.log(`username is ${anyobj.name} and age is ${anyobj.age}`)
}
 hadleObject(user)
 // we can directy pass object
 hadleObject({
    name:"Sumit",
    age:24

 })

//<-------function and array--------->
const array=[100 ,520 ,639,152,456]
function returnSecondArray(getarray)
{
    return getarray[1]
}
console.log(returnSecondArray(array))
//pass directy array in argument
console.log(returnSecondArray([120,4966,6964,567,356]))