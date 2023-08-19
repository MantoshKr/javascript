// simple function 

const addition =(x, y, z)=>{
    return x+y+z
}
console.log(addition(2, 3, 5)) // 10



// now using curring function 


function sum(x) {   // x is taken as argument here
    return (y) => {
        return (z) => { // this function will return the sum
            return x + y + z
        }
    }
}
console.log(sum(1)(2)(3)) // 6

console.log(sum(1))

// output will be : 
// (y) => {
//     return (z) => { // this function will return the sum
//         return x + y + z
//     }
// }


console.log(sum(1)(2))

// output will be :
// (z) => { // this function will return the sum
//     return x + y + z
// }
