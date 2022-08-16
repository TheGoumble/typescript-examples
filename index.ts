let firstName: string = "this is my first name"
let age: number = 69
let active: boolean = true

//let names: string[] = [1,2,3,4] //gives us an error
let names: string[] = ["1", "2", "3", "4"]

enum studentTypes {
  pending,
  active,
  graduated,
  tas,
  teachers,
}

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

let numbers: number[] = [1, 2, 3, 4, 5]

// console.log(sum(numbers))

let complexItem: any = { name: "my name" }

complexItem = { title: "professor" }
complexItem = "It's a string"
complexItem = 22

// console.log("complexItem", complexItem)

enum bloodType {
  aPositive,
  bPositive,
}
interface human {
  name: string
  age: number
  height: number
  bloodType: bloodType
}

const me: human = {
  name: "Max",
  age: 22,
  height: 3,
  bloodType: bloodType.aPositive,
}
