// var a = prompt("Welcome to guessing a number game");
// var maximum = parseInt(prompt("Enter a maximum number"));
// while(!maximum)
// {
//     maximum = prompt("Enter a valid number");
// }
// const target = math.floor(math.random()*maximum)+1;

// var guess = parseInt(prompt("Enter your first guess")) 
// var attempt =1
// while(parseInt(guess)!=target)
// {
//     if(guess==='q')break;
    
    
//     if(guess>target)
//     prompt("too high enter new guess")
//     else
//     {
//         prompt("too low enter new guess")
//     }
//     attempt++
// }
// // console.log(attempt)
// console.log(`congress you got it ${guess} in ${attempt}`)




let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum)
{
    maximum = parseInt(prompt("pls enter valid number"));
}
const targetNum = Math.floor(Math.random()* maximum)+1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempt = 1;

while(parseInt(guess) !==targetNum){
    if(guess==='q') break;
    attempt++;
    if(guess>targetNum)
    {
        guess = (prompt("too high ! Enter a new guess"));
    }
    else
    {
        guess = (prompt("too low ! Enter a new guess"));
    }
}
if(guess==='q')
{
    console.log("ok! you quitting")
}
else{
    console.log(`you got it! It took you ${attempt} guesses`);
}
