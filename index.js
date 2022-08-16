var firstName = "this is my first name";
var age = 69;
var active = true;
//let names: string[] = [1,2,3,4] //gives us an error
var names = ["1", "2", "3", "4"];
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["graduated"] = 2] = "graduated";
    studentTypes[studentTypes["tas"] = 3] = "tas";
    studentTypes[studentTypes["teachers"] = 4] = "teachers";
})(studentTypes || (studentTypes = {}));
// let mystatus = studentTypes.graduated
// switch (Number(mystatus)){
//     case Number(studentTypes.active):
//             console.log("student is active")
//         break
//     case Number(studentTypes.graduated):
//             console.log("Student is graduated")
//         break
//     default:
//         console.log("😎")
// }
// console.log(mystatus)
// if(mystatus == studentTypes.graduated){
//     console.log("This student is graduated")
// }
// console.table(names)
// console.log(`my first name is ${firstName}`)
// let code: string | number = 11
//code = "aa11"// not a string or numbers
// console.log(`My entry code is: ${code}`)
// function sum(arr: number[]){
//      return arr.reduce((total : number ,num : number) => total + num)
//      arr.reduce((previousValue: number, currentValue: number) => {return previousValue + currentValue})
// }
var numbers = [1, 2, 3, 4, 5];
// console.log(sum(numbers))
var complexItem = { name: "my name" };
complexItem = { title: "professor" };
complexItem = "It's a string";
complexItem = 22;
// console.log("complexItem", complexItem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["bPositive"] = 1] = "bPositive";
})(bloodType || (bloodType = {}));
var me = {
    name: "Max",
    age: 22,
    height: 3,
    bloodType: bloodType.aPositive
};
