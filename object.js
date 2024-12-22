//object literal
//create a symbol and use it as a object key
let myS=Symbol("mykey1");

let userDetail=
{
    name:"Vishal Yadav",
    age:18,
    email:"vishalsyadav691@gmail.com",
    location:"Azamgarh",
    "father name":"kamlesh Yadav",//this can't be access by (.)only []
    logedIn:false,
    [myS]:"mykey1",// to use symbol as a key u have too use: []
    last3LogIn:["Monday","thursday","Saturday"]
}
console.log(userDetail.name);//accessing using "." method 
console.log(userDetail.email)
console.log (userDetail["email"]);//accessing using: []
console.log(userDetail["father name"])

// symbol can be access only by :[]
console.log(userDetail[myS])
//update or override the value
userDetail.email="vy0196076@gmail.com";


console.log(userDetail.email);
console.log(userDetail.last3LogIn)
//adding funtion to object
userDetail.greeting=function (){
    console.log(" Welcome bro ,lets start  learning of adding funtion in object")
}
userDetail.greeting();

// accessing object variable in object method 
userDetail.display = function () {
    console.log(`Name: ${this.name}
Age: ${this.age}
Email: ${this.email}
Father Name: ${this["father name"]}`);
};
userDetail.display();

//<-------freezing object-------------->
// freez the object which means any value of object  can be changed 
Object.freeze(userDetail);
userDetail.email="josdflsdhsdf";//this will not show the error but there will be no updation in email