let sentence = prompt("Enter a String");
let obj = {};
for(let i=0;i<sentence.length;i++)
{
    if(obj[sentence[i]]>=1)
    {
        obj[sentence[i]]++;
    }
    else
    {
        obj[sentence[i]] = 1;
    }
}

for(let i=0;i<sentence.length;i++)
{
    if(obj[sentence[i]]==1)
    {
        console.log(sentence[i]);
        break;
    }
}
