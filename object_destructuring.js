const course={
    courseName:"Javascript",
    price:1500,
    instructor:"Hitesh"
}
// console.log(course.courseName) alternative of this syntax
const {courseName:CN}=course;
const {instructor:In}=course;
console.log(CN);
console.log(In)
