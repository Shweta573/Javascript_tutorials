let myarr1=[1,2,3,4,5,6,'Shweta',true] // it can store multiple datatypes at a time

let myarr2=[1,2,3,4,5,6]
console.log(myarr2[0]) // 1


//Array Methods
const myarr3=[8,2,4,9,0,1]
myarr3.push(6)
console.log(myarr3) 
    
/*[
    8, 2, 4, 9,
    0, 1, 6
  ]
*/

myarr3.pop() // it removes the last element 
console.log(myarr3) 

myarr3.unshift(10) // it will add new element 10 at the first index of an array
console.log(myarr3) 

myarr3.shift(10) // it will remove new element 10 at the first index of an array
console.log(myarr3) 

const myarr4=[1,2,3,4,5]
console.log(myarr4.includes(4))

const myarr5=[1,2,3,4,5]
const Newarr = myarr5.join() //it converts array into string ; 1,2,3,4,5
console.log(Newarr)

let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4);  // Copies elements from index 1 to index 3 (4 is excluded)
console.log(newArr);  // [2, 3, 4]
console.log(arr);     // Original array is unchanged: [1, 2, 3, 4, 5]

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 2, 'a', 'b');  // Starts at index 2, removes 2 elements, then adds 'a' and 'b'
console.log(arr1);  // [1, 2, 'a', 'b', 5]

const marvel_heros=['Ironman','Spiderman','Thor']
const dc_heros=['Batman','Superman','Flash']
marvel_heros.push(dc_heros)
console.log(marvel_heros) //it simples places one array inside an another array

let arr2 = [1, 2, 3];
let str = "Hello";
let combined = arr2.concat(str);
console.log(combined);  // [1, 2, 3, "Hello"]

const all_new_heros = [...marvel_heros ,...dc_heros] //it is called spread operator and it simply works a s concat function
console.log(all_new_heros) 

const array7=[1,2,3,[4,5,[6,7,8],9,10,11],13,14]
const newarray=array7.flat(Infinity)//it simply places all array element under a single element.
console.log(newarray)