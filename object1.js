const tinderUser={
    id:"123abc",
    name:"Sumit",
    isLoggedIn:false
}
//nesting object
const regularUser={
    fullName:{
        userfullNmae:
        {
            fistName:"Vishal",
            lastName:"Yadav"
        }
    }
}
//accessing object within object
console.log(regularUser.fullName)
console.log(regularUser.fullName.userfullNmae)
console.log(regularUser.fullName.userfullNmae.fistName);
//<---combingin two object using assing method---->
const obj=Object.assign({},tinderUser,regularUser)
// console.log(obj)
// console.log(obj.fullName.userfullNmae.lastName)

//<--- combing two object using spread operator---->
const obj1={...tinderUser,...regularUser}
// console.log(obj1)

//<------- array of object and its access method-------->
user=[
    {
        id:"124ab",
        email:"abs@mail.com"

    },
    {
        id:"144ab",
        email:"nsds@mail.com"

    },
    {
        id:"162hjs",
        email:"sojg@mail.com"

    },
    {
        id:"549woh",
        email:"eoihw@mail.com"

    },
    {
        id:"146weh",
        email:"aeh@mail.com"

    }
]

console.log(user[1].email)
console.log("\n")
console.log("\n")
//accessing object key  and value
console.log(Object.keys(tinderUser))//return the array of keys
console.log(Object.values(tinderUser))//return the array of values
//object.entries()return the array of array of every key value
console.log(Object.entries(tinderUser))
//object_Name.hasOwnProperty(Propery_name)tell is the given property is exist in object or not
console.log(tinderUser.hasOwnProperty('id'))
