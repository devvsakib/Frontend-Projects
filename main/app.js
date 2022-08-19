// let word = "word"
// console.log(word.length);
// for (let  i = (word.length - 1); i >=0; i--){
//     console.log("Position: "+ i + ":");
//     console.log("char - " + word.charAt(i))
// }

let vegetables = ["carrot", "tomato", "cucumber"]
// console.log(vegetables.length);
let vegetable
let book = { 
    title: "Neverending story", 
    author: "John Smith", 
    pages: 100 
}
// console.log(book["title"]);
// Given array [1,2,3,4,5,6,7,8,9,10,11,12] make it [0,0,0,0,1,1,1,1,0,0,0,0]
//JavaSrcipt INTERMEDIATE PROBLEM
let given_array = [1,2,3,4,5,6,7,8,9,10,11,12]
let modi_array = []

for ( let i = 0; i < given_array.length; i++){
    if (i < 4 || i > 7){
        l = given_array[i]
        l = 0
        modi_array.push(l)
    }    
    else{
        l = given_array[i]
        l = 1
        modi_array.push(l)
    }
}
// console.log(modi_array);

/*
Write a function frequencies(arr) that takes in the string:
"lkazjsdfnvapsifdophoidhjsadlkfjgbplak" and return a hash table containing all the different characters in it as the keys, and the number of times each character is repeated as the values
 
Example:
 
input: "lkazjsdfnvapsifdophoidhjsadlkfjgbplak"
 
output:  
{"l":3,"k":3,"a":4,"z":1,"j":3,"s":3,"d":4,"f":3,"n":1,"v":1,"p":3,"i":2,"o":2,"h":2,”g”:1,”b”:1};
*/
// Solutions ->
const given_string = "lkazjsdfnvapsifdophoidhjsadlkfjgbplak"
const modi_obj = {}

for ( let i = 0; i < given_string.length; i++){
    if ( !modi_obj[given_string[i]]){
        modi_obj[given_string[i]] = 1
        // console.log(modi_obj[given_string[i]]);
    }
    else{
        // console.log(modi_obj[given_string[i]]);
        // if the value is there, just add 1
        modi_obj[given_string[i]] += 1
    }
}
console.log(modi_obj)
for ( let element in modi_obj){
    // ieterate the object
    // console.log(element)
}




// this is JsAlgo branch
// d800fa5ee24c8e0072fe4d7c0