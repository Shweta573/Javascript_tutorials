/* for (index = 0;index<array.length;index++){
    const elememt = array[index];
}// error occurs that array is not defined



for (index = 0; index<10; index++){
    const element = index
    console.log(element) // 0  1 2 3 4 5 6 7 8 9 
    
}


for (i=0; i<10; i++){
    const element = i
    if(i == 5){
        console.log("5 is the big number")
    }
    console.log(element) // 0  1 2 3 4 5 is the big number 5 6 7 8 9 
}
    */

// Nested Loop:
for ( let i=0; i<10; i++ )
{
    console.log(`The inner loop is: ${i}`)
    for (let j = 0; j < 10; j++ ){
        console.log(`The inner loop is ${i} and outer loop is: ${j}`)
        console.log(i + "*" +  j +  "=" +  i*j)
}
}

// Working of break & continue:

for (let i=0; i<10; i++ )
{
    if(i==5) break; // 0 1 2 3 4 ; once 5 is detected the cursor will move out of scope 
    console.log(`The loop is: ${i}`)
}

for (let i=0; i<10; i++ ){
    if(i==5) continue; // 0 1 2 3 4 6 7 8 9
    console.log(`The loop is: ${i}`) // it will skip that specific iteration 
}