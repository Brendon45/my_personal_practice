console.log("This is for the while loop ")

let i = 0;

while (i < 10)
{
    console.log(i);
    i++;
}

console.log("This is for the for loop ")

for (let j = 0; j < 10; j++)
{
    console.log(j);
}

console.log("This is for break statement")

for (let k = 0; k < 10; k++)
{
    if(k === 5)
    {
    break;
    }
    console.log(k);
}

console.log("This is for the continue statement")

for (m = 0; m < 10; m++)
{
    if (m === 3)
    {
        continue;
    }
    console.log(m)
}