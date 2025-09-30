/*
break: applicable for switch and loop
break will exit from switch and loop body

continue: will help you to skip certain part of code/execution
continue skip current iteration and proceed next one




*/
console.log("-----break------");


for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }
    else
    {
        console.log(i);
        
    }
}

console.log("-----continue------");


for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        continue;
    }
    else
    {
        console.log(i);
        
    }
}







